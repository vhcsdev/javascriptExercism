export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}


export function daysInBudget(budget, ratePerHour) {
  const workHoursPerDay = dayRate(ratePerHour);
  return Math.floor( budget / workHoursPerDay);
  
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const numberOfMonths = Math.floor(numDays/22);
  const monthlyRate = 22 * dayRate(ratePerHour);
  const monthlyRateDiscount = monthlyRate * (1 - discount);

  const numExtraDays = numDays % 22;
  const extraDaysRate = numExtraDays * dayRate(ratePerHour);

  return Math.ceil(numberOfMonths * monthlyRateDiscount + extraDaysRate);
}
