import {
  DAYS_IN_MONTH, DAYS_IN_WEEK, Month, WEEK_DAYS_FROM_MONDAY,
} from './consts';

export function areEqual(a: Date, b: Date | null) {
  if (!a || !b) {
    return false;
  }

  return (
    a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
  );
}

export function isLeapYear(year: number) {
  return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date: Date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  }

  return daysInMonth;
}

export function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year: number, month: number) {
  const result: (Date | undefined)[][] = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i += 1) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j += 1) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day);

        day += 1;
      }
    }
  }

  return result;
}

export function getPrevMonthDataWeek(year: number, month: number): (Date | undefined)[] {
  return (getMonthData(year, month - 1).slice(-1))[0];
}

export function getNextMonthDataWeek(year: number, month: number): (Date | undefined)[] {
  return (getMonthData(year, month + 1)[0]);
}

export function getMonthDataRender(year: number, month: number): (Date)[][] {
  let result: any[] = [];

  result = getMonthData(year, month);
  const prevMonth = getPrevMonthDataWeek(year, month);
  const nextMouth = getNextMonthDataWeek(year, month);

  if (prevMonth.some(item => item === undefined)) {
    prevMonth.forEach((item, index) => {
      if (item) {
        result[0][index] = item;
      }
    });
  } else {
    result.unshift(prevMonth);
  }

  if (nextMouth.some(item => item === undefined)) {
    nextMouth.forEach((item, index) => {
      if (item) {
        result[result.length - 1][index] = item;
      }
    });
  } else {
    result.push(nextMouth);
  }

  return result;
}

export const getYears = () => {
  const result: number[] = [];

  for (let i = 1990; i < 2030; i += 1) {
    result.push(i);
  }

  return result;
};
