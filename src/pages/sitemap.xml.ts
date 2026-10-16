import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { siteStructure } from '../data/siteStructure';

function runGit(args: string[]) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

function findPageSourceFile(pagePath: string) {
  const slug = pagePath.replaceAll('/', '');
  if (!slug) return 'src/pages/index.astro';
  return [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`].find((file) => existsSync(file));
}

function getLastCommitDate(file: string | undefined, hasFullHistory: boolean) {
  if (!file || !hasFullHistory) return undefined;
  return runGit(['log', '-1', '--format=%cs', '--', file]) || undefined;
}

export const GET: APIRoute = ({ site }) => {
  const hasFullHistory = runGit(['rev-parse', '--is-shallow-repository']) === 'false';
  const entries = Object.keys(siteStructure).map((pagePath) => {
    const lastModified = getLastCommitDate(findPageSourceFile(pagePath), hasFullHistory);
    const location = new URL(pagePath, site).href;
    return lastModified
      ? `  <url><loc>${location}</loc><lastmod>${lastModified}</lastmod></url>`
      : `  <url><loc>${location}</loc></url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } });
};
