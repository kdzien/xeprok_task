import './date-prototypes';

describe('Date', () => {
  it('should return true if date is from past', () => {
    expect(new Date('2017-10-10').isFromPast()).toBeTruthy();
  });
  it('should return false if date is not from past', () => {
    expect(new Date('2019-10-10').isFromPast()).toBeFalsy();
  });
  it('should return true if dates are weekend', () => {
    expect(new Date('2018-09-29').isWeekend(new Date('2018-09-30'))).toBeTruthy();
  });
  it('should return false if dates are not weekend', () => {
    expect(new Date('2018-08-29').isWeekend(new Date('2018-09-30'))).toBeFalsy();
  });
  it('should return true if date is between two dates ', () => {
    expect(new Date('2018-10-10').isBetween(new Date('2018-09-30'), new Date('2018-10-30'))).toBeTruthy();
  });
  it('should return false if date is not between two dates ', () => {
    expect(new Date('2019-10-10').isBetween(new Date('2018-09-30'), new Date('2018-10-30'))).toBeFalsy();
  });
});
