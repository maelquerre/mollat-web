import Alpine from 'alpinejs';
import dayjs from 'dayjs';

window.Alpine = Alpine;

/* Banner */
window.setupTimeLeft = function () {
  const today = dayjs();
  const christmas = dayjs()
    .set('day', 24)
    .set('month', 11)
    .set('year', today.year())
    .set('hours', 23)
    .set('minutes', 59)
    .set('seconds', 59);
  let delta = christmas.diff(today) / 1000;
  const daysLeft = Math.floor(delta / 86400);
  delta -= daysLeft * 86400;
  const hoursLeft = Math.floor(delta / 3600) % 24;
  delta -= hoursLeft * 3600;
  const minutesLeft = Math.floor(delta / 60) % 60;
  delta -= minutesLeft * 60;
  return { daysLeft, hoursLeft, minutesLeft };
};

/* Calendar */
window.setupCalendar = function () {
  const today = dayjs('12/02/2021');
  const books = [...Array(24)].map(() => ({
    title: 'Les fossoyeuses',
    cover: 'https://mollatcommon.blob.core.windows.net/notices57/2508511_medium.jpg',
    editor: 'Editions Marchialy',
    summary:
      "En Bosnie-Herzégovine, pays marqué par la guerre, Senem est anthropologue judiciaire chargée d'identifier les ossements humains retrouvés dans des anciens charniers. Darija, elle, enquête auprès des familles des disparus pour recueillir leur parole et prélever leur ADN. Journaliste, l'auteure les a suivies pendant plusieurs années dans leur quête de vérité. ©Electre 2021",
  }));
  const cells = books.map((book, index) => {
    const day = index + 1;
    const cellDate = dayjs().set('day', day).set('month', 11).set('year', today.year());
    const show = today.isSame(cellDate, 'day') || today.isAfter(cellDate, 'day');
    return {
      day,
      book,
      show,
      quote: "On sent que rien n'est laissé au hasard, tout est très travaillé jusqu'au moindre détail",
    };
  });
  /* Randomize cells order */
  cells.sort(() => Math.random() - 0.5);
  return {
    cells,
    getCellClasses(day) {
      return `cell--${day}`;
    },
  };
};

Alpine.start();
