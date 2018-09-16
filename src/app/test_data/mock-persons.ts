import { Holiday } from 'src/app/models/Holiday';
export const HOLIDAYS: Holiday[] = [
  {
    name: 'Konrad',
    surename: 'Dzień',
    team: 'IT',
    from: new Date('2018-10-10'),
    to: new Date('2018-10-15')
  },
  {
    name: 'Anita',
    surename: 'Włodarczyk',
    team: 'IT',
    from: new Date('2018-10-16'),
    to: new Date('2018-10-25'),
  }
];

export const CORRECT_HOLIDAY: Holiday = {
  name: 'Anna',
  surename: 'Lewandowska',
  team: 'IT',
  from: new Date('2018-10-26'),
  to: new Date('2018-10-30')
};

export const WEEKEND_HOLIDAY: Holiday = {
  name: 'Anna',
  surename: 'Lewandowska',
  team: 'IT',
  from: new Date('2018-09-29'),
  to: new Date('2018-09-30')
};

export const PAST_DATE: Holiday = {
  name: 'Anna',
  surename: 'Lewandowska',
  team: 'IT',
  from: new Date('2010-10-29'),
  to: new Date('2018-10-30')
};

export const WRONG_HOLIDAYS: Holiday[] = [
  {
    name: 'Anna',
    surename: 'Lewandowska',
    team: 'IT',
    from: new Date('2018-10-05'),
    to: new Date('2018-10-15')
  },
  {
    name: 'Anna',
    surename: 'Lewandowska',
    team: 'IT',
    from: new Date('2018-10-11'),
    to: new Date('2018-10-14')
  },
  {
    name: 'Anna',
    surename: 'Lewandowska',
    team: 'IT',
    from: new Date('2018-10-07'),
    to: new Date('2018-10-10')
  },
  {
    name: 'Anna',
    surename: 'Lewandowska',
    team: 'IT',
    from: new Date('2018-10-25'),
    to: new Date('2018-10-27')
  }
]
