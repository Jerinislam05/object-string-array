// year will be leap year if the year is divisible by 4
function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leapYear = isLeapYear(2032);
console.log(leapYear);
// those year that is not divisible by 100, if the leap year is divisible by 4, then it will be a leap year
// if the year is divisible by 400, then it will be a leap year else it will not a leap year
function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear1 = isLeapYear2(2100);
const leapYear2 = isLeapYear2(2400);
const leapYear3 = isLeapYear2(1900);
const leapYear4 = isLeapYear2(2052);
console.log(leapYear1, leapYear2, leapYear3, leapYear4);
