interface Date {
  isBetween: (start: Date, from: Date, to: Date) => boolean;
  isFromPast: () => boolean;
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
