export function totalBirdCount(birdsPerDay) {
  let count = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;

  for (let i = 7 * (week - 1); i < week * 7; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
