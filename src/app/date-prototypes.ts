interface Date {
  isBetween: (from: Date, to: Date) => boolean;
  isFromPast: () => boolean;
  checkWeekend: (date: Date) => boolean;
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
Date.prototype.checkWeekend = function(date){
  if(this.getDay() == 6 && date.getDay() == 0){
    return true;
  }
  return false;
}
