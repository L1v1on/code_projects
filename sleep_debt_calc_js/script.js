function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
      break;

    case 'tuesday':
      return 2;
      break;

    case 'wednesday':
      return 3;
      break;

    case 'thursday':
      return 4;
      break;

    case 'friday':
      return 5;
      break;

    case 'saturday':
      return 6;
      break;

    case 'sunday':
      return 7;
      break;

    default:
      return 0;
      break;
  }
}

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

console.log('Acutal Sleep Hours: ' + getActualSleepHours());

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}
console.log('Ideal Sleep Hours: ' + getIdealSleepHours());

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours == idealSleepHours) {
    console.log('You got perfect sleep!');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed: ' + (actualSleepHours-idealSleepHours) + ' hours over ideal');
  } else{
    console.log('You should go to bed: ' + (idealSleepHours-actualSleepHours) + ' hours under ideal');
  }
}
calculateSleepDebt();