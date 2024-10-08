import moment from "moment-timezone";

type Weekdays = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];

const convertWeekdaysAndTimesToOffsets = (
  weekdays: [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
  times: string[]
) => {
  const offsets: number[] = [];

  weekdays.forEach((weekday, index) => {
    if (weekday) {
      times.forEach((time) => {
        const [hour, minute] = time.split(":");

        const hours = 24 * index + parseInt(hour);
        const minutes = hours * 60 + parseInt(minute);
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;

        offsets.push(milliseconds);
      });
    }
  });

  return offsets;
};

const convertOffsetsToWeekdaysAndTimes = (offsets: number[]): [Weekdays, string[]] => {
  const weekdays: Weekdays = [false, false, false, false, false, false, false];
  const times: string[] = [];

  const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
  const MILLISECONDS_IN_HOUR = 60 * 60 * 1000;
  const MILLISECONDS_IN_MINUTE = 60 * 1000;

  offsets.forEach((offset) => {
    const weekday = Math.floor(offset / MILLISECONDS_IN_DAY);
    const daily = offset % MILLISECONDS_IN_DAY;

    const hours = Math.floor(daily / MILLISECONDS_IN_HOUR);
    const hourly = daily % MILLISECONDS_IN_HOUR;

    const minutes = Math.floor(hourly / MILLISECONDS_IN_MINUTE);
    const time = moment(`${hours}:${minutes}`, "H:m").format("HH:mm");

    weekdays[weekday] = true;

    if (!times.includes(time)) {
      times.push(time);
    }
  });

  return [weekdays, times];
};

export default {
  convertWeekdaysAndTimesToOffsets,
  convertOffsetsToWeekdaysAndTimes,
};
