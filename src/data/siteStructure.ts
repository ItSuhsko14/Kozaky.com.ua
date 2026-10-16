export interface PageNode {
  name: string;
  parent?: string;
  service?: {
    cities: string[];
  };
  previewImage?: string;
}

export const defaultPreviewImage = '/img/img1.webp';
export const previewImageSize = { width: 1200, height: 630 };

const servedInDnipro = { cities: ['Дніпро'] };

export const siteStructure: Record<string, PageNode> = {
  '/': { name: 'Головна' },
  '/rozvagi/': { name: 'Козацькі розваги', parent: '/', service: servedInDnipro, previewImage: '/img/rozvagi/Luti03.webp' },
  '/knifes/': { name: 'Метання ножів', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/nozhi1.webp' },
  '/spears/': { name: 'Метання списів', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/Spisi1.webp' },
  '/brevno/': { name: 'Бої на бревні', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/brevno1.webp' },
  '/koloda/': { name: 'Силова колода', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/koloda1.webp' },
  '/cviahi/': { name: 'Забивання цвяхів', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/cviahi1.webp' },
  '/rubkaovochiv/': { name: 'Рубка овочів шаблею', parent: '/rozvagi/', service: servedInDnipro, previewImage: '/img/rozvagi/rubka1.webp' },
  '/boi-na-shablyah/': { name: "Бої на м'яких шаблях", parent: '/rozvagi/', service: servedInDnipro },
  '/luchniy/': { name: 'Виїзний лучний тир', parent: '/rozvagi/', service: { cities: ['Дніпро', 'Київ'] }, previewImage: '/img/rozvagi/luchniy2.webp' },
  '/luchniy-dnipro/': { name: 'Лучний тир у Дніпрі', parent: '/luchniy/', service: servedInDnipro, previewImage: '/img/rozvagi/luchniy2.webp' },
  '/luchniy-kyiv/': { name: 'Лучний тир у Києві', parent: '/luchniy/', service: { cities: ['Київ'] }, previewImage: '/img/rozvagi/luchniy2.webp' },
  '/kozakshow/': { name: 'Козацьке шоу', parent: '/', service: servedInDnipro, previewImage: '/img/kozakshow/Luti561.webp' },
  '/programa-pokazova/': { name: 'Показово-інтерактивна програма', parent: '/kozakshow/', service: servedInDnipro, previewImage: '/img/kozakshow/Luti561.webp' },
  '/kozakfire/': { name: 'Вогняне шоу «Лютий вогонь»', parent: '/', service: servedInDnipro, previewImage: '/img/img01.webp' },
  '/lutakuhnya/': { name: 'Виїзна кухня та кейтеринг', parent: '/', service: { cities: ['Дніпро', 'Київ'] }, previewImage: '/img/lutakuhnya/kuhnya46.webp' },
  '/kulish/': { name: 'Козацький куліш на свято', parent: '/lutakuhnya/', service: { cities: ['Дніпро', 'Київ'] }, previewImage: '/img/lutakuhnya/kuhnya9.webp' },
  '/sviato/': { name: 'Свято в козацькому стилі', parent: '/', service: servedInDnipro, previewImage: '/img/luti46.webp' },
  '/kolodiy/': { name: 'Масляна від Лютих козаків', parent: '/', service: servedInDnipro, previewImage: '/img/kolodiy/lutiKolodiyShow.webp' },
  '/shably/': { name: 'Люті шаблі', parent: '/', service: servedInDnipro, previewImage: '/img/shably/polsug/polsug8.webp' },
  '/article2/': { name: 'Кілідж', parent: '/shably/', previewImage: '/articles/article2/kilidg1.webp' },
  '/article3/': { name: 'Шабля орла', parent: '/shably/', previewImage: '/img/shably/shablyaorla/shablyaorla4.webp' },
  '/article4/': { name: 'Польсько-угорська шабля', parent: '/shably/', previewImage: '/img/shably/polsug/polsug1.webp' },
  '/poslugi/': { name: 'Послуги', parent: '/', previewImage: '/img/mainpage/show.webp' },
  '/photo/': { name: 'Фото', parent: '/', previewImage: '/img/luti32.webp' },
  '/video/': { name: 'Відео', parent: '/' },
  '/news/': { name: 'Козацькі новини', parent: '/', previewImage: '/articles/article3/shablyaorla4.webp' },
  '/kontakty/': { name: 'Контакти', parent: '/' },
  '/war-songs/': { name: 'Пісні новітньої української доби', parent: '/', previewImage: '/img/songs.webp' },
};

export function getBreadcrumbTrail(path: string): { name: string; path: string }[] {
  const trail = [];
  let currentPath: string | undefined = path;
  while (currentPath && siteStructure[currentPath]) {
    trail.unshift({ name: siteStructure[currentPath].name, path: currentPath });
    currentPath = siteStructure[currentPath].parent;
  }
  return trail;
}

export function getPreviewImageName(path: string): string {
  return siteStructure[path]?.previewImage ? path.replaceAll('/', '') : 'default';
}
