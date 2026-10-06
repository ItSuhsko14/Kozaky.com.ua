export interface PageNode {
  name: string;
  parent?: string;
  service?: {
    cities: string[];
  };
}

const servedInDnipro = { cities: ['Дніпро'] };

export const siteStructure: Record<string, PageNode> = {
  '/': { name: 'Головна' },
  '/rozvagi/': { name: 'Козацькі розваги', parent: '/', service: servedInDnipro },
  '/knifes/': { name: 'Метання ножів', parent: '/rozvagi/', service: servedInDnipro },
  '/spears/': { name: 'Метання списів', parent: '/rozvagi/', service: servedInDnipro },
  '/brevno/': { name: 'Бої на бревні', parent: '/rozvagi/', service: servedInDnipro },
  '/koloda/': { name: 'Силова колода', parent: '/rozvagi/', service: servedInDnipro },
  '/cviahi/': { name: 'Забивання цвяхів', parent: '/rozvagi/', service: servedInDnipro },
  '/rubkaovochiv/': { name: 'Рубка овочів шаблею', parent: '/rozvagi/', service: servedInDnipro },
  '/boi-na-shablyah/': { name: "Бої на м'яких шаблях", parent: '/rozvagi/', service: servedInDnipro },
  '/luchniy/': { name: 'Виїзний лучний тир', parent: '/rozvagi/', service: { cities: ['Дніпро', 'Київ'] } },
  '/luchniy-dnipro/': { name: 'Лучний тир у Дніпрі', parent: '/luchniy/', service: servedInDnipro },
  '/luchniy-kyiv/': { name: 'Лучний тир у Києві', parent: '/luchniy/', service: { cities: ['Київ'] } },
  '/kozakshow/': { name: 'Козацьке шоу', parent: '/', service: servedInDnipro },
  '/programa-pokazova/': { name: 'Показово-інтерактивна програма', parent: '/kozakshow/', service: servedInDnipro },
  '/kozakfire/': { name: 'Вогняне шоу «Лютий вогонь»', parent: '/', service: servedInDnipro },
  '/lutakuhnya/': { name: 'Козацька кухня', parent: '/', service: servedInDnipro },
  '/sviato/': { name: 'Свято в козацькому стилі', parent: '/', service: servedInDnipro },
  '/kolodiy/': { name: 'Масляна від Лютих козаків', parent: '/', service: servedInDnipro },
  '/shably/': { name: 'Люті шаблі', parent: '/', service: servedInDnipro },
  '/article2/': { name: 'Кілідж', parent: '/shably/' },
  '/article3/': { name: 'Шабля орла', parent: '/shably/' },
  '/article4/': { name: 'Польсько-угорська шабля', parent: '/shably/' },
  '/poslugi/': { name: 'Послуги', parent: '/' },
  '/photo/': { name: 'Фото', parent: '/' },
  '/video/': { name: 'Відео', parent: '/' },
  '/news/': { name: 'Козацькі новини', parent: '/' },
  '/kontakty/': { name: 'Контакти', parent: '/' },
  '/war-songs/': { name: 'Пісні новітньої української доби', parent: '/' },
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
