export interface YouTubeVideoInfo {
  title: string;
  uploadDate: string;
  durationSeconds: number;
}

export const youTubeVideos: Record<string, YouTubeVideoInfo> = {
  er6okgv9ipA: { title: 'Розваги від Лютих козаків', uploadDate: '2021-01-09T05:21:01-08:00', durationSeconds: 123 },
  pJJDiloVOq0: { title: 'Показово-конкурсна програма від Лютих козаків', uploadDate: '2020-10-26T07:41:25-07:00', durationSeconds: 75 },
  '8rKwMmhv2Lw': { title: 'Колодій (Масляна) з Лютими козаками', uploadDate: '2018-03-07T07:18:46-08:00', durationSeconds: 93 },
  WYr_sTH18S0: { title: 'Люта кухня', uploadDate: '2023-04-25T12:22:18-07:00', durationSeconds: 60 },
  bKSD25ng0kg: { title: 'Дитяче свято від Лютих козаків', uploadDate: '2017-09-10T10:17:08-07:00', durationSeconds: 71 },
  YC01Fb0DmVg: { title: 'Масштабна піротехнічна вистава «Лютий вогонь»', uploadDate: '2021-09-02T07:57:21-07:00', durationSeconds: 59 },
  '-CZit1gdD4k': { title: 'Показовий виступ Лютих козаків', uploadDate: '2015-08-25T03:14:56-07:00', durationSeconds: 280 },
  '-WiHCZl_hFc': { title: 'Люті козаки на відкритті ресторану «Хата», м. Львів', uploadDate: '2021-07-30T07:43:09-07:00', durationSeconds: 37 },
};
