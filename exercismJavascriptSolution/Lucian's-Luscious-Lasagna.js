const TIME_PREPARATION = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
export function remainingMinutesInOven(tempoNoForno) {
  const actualMinutesInOven = EXPECTED_MINUTES_IN_OVEN - tempoNoForno
  return  actualMinutesInOven
}
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * TIME_PREPARATION
}
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * TIME_PREPARATION) + actualMinutesInOven
}
