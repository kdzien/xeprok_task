interface Date {
  isBetween: (from: Date, to: Date) => boolean;
  isFromPast: () => boolean;
  isWeekend: (date: Date) => boolean;
  dateToString: () => String;
}

Date.prototype.isBetween = function(from, to) {
  if (this >= from && this <= to) {
    return true;
  }
  return false;
};
Date.prototype.isFromPast = function() {
  if (this <= new Date()) {
    return true;
  }
  return false;
};
Date.prototype.isWeekend = function(date) {
   const checkWeekend = (x, y) =>  this.getDay() === x && date.getDay() === y ? true : false;
  if (checkWeekend(6, 0) || checkWeekend(6, 6) || checkWeekend(0, 0)) {
    return true;
  }
  return false;
};
Date.prototype.dateToString = function() {
  return this.toISOString().split('T')[0];
};
