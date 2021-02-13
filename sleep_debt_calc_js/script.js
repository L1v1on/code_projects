const getActualSleepHours = () =>
  8 +
  2 +
  3 +
  4 +
  5 +
  6 +
  7;

console.log('Acutal Sleep Hours: ' + getActualSleepHours());

function getIdealSleepHours(hours) {
  let idealHours = hours;
  return idealHours * 7;
}
console.log('Ideal Sleep Hours: ' + getIdealSleepHours(9));

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours == idealSleepHours) {
    console.log('You got perfect sleep!');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed: ' + (actualSleepHours-idealSleepHours) + ' hours over ideal');
  } else{
    console.log('You should go to bed: ' + (idealSleepHours-actualSleepHours) + ' hours under ideal');
  }
}
calculateSleepDebt();