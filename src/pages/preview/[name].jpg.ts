import type { APIRoute, GetStaticPaths } from 'astro';
import path from 'node:path';
import sharp from 'sharp';
import { defaultPreviewImage, getPreviewImageName, previewImageSize, siteStructure } from '../../data/siteStructure';

export const getStaticPaths = (() => {
  const pagesWithPreview = Object.entries(siteStructure)
    .filter(([, page]) => page.previewImage)
    .map(([pagePath, page]) => ({ params: { name: getPreviewImageName(pagePath) }, props: { source: page.previewImage! } }));
  return [...pagesWithPreview, { params: { name: 'default' }, props: { source: defaultPreviewImage } }];
}) satisfies GetStaticPaths;

async function renderPreviewImage(sourceFile: string) {
  const { width, height } = previewImageSize;
  const blurredBackground = await sharp(sourceFile)
    .resize(width, height, { fit: 'cover' })
    .blur(40)
    .modulate({ brightness: 0.7 })
    .toBuffer();
  const photo = await sharp(sourceFile).resize(width, height, { fit: 'inside' }).toBuffer();
  return sharp(blurredBackground)
    .composite([{ input: photo, gravity: 'center' }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

export const GET: APIRoute = async ({ props }) => {
  const sourceFile = path.join(process.cwd(), 'public', props.source);
  const image = await renderPreviewImage(sourceFile);
  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/jpeg' } });
};
