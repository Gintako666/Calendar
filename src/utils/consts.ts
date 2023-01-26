export const DAYS_IN_WEEK = 7;

export const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

export const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11,
};

export const getYear = () => {
  const result: number[] = [];

  for (let i = 1990; i < 2030; i += 1) {
    result.push(i);
  }

  return result;
};

export const MonthReverse = Object.keys(Month);
