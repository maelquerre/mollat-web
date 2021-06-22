import Alpine from 'alpinejs';
import dayjs from 'dayjs';

window.Alpine = Alpine;

/* Banner */
window.setupBannerData = function () {
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

Alpine.start();
