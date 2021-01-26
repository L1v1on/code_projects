const myAge = 29;
let earlyYears = 2;
earlyYears *= 10.5; //Early dog years
let laterYears = myAge - 2;
laterYears *= 4; //Later dog years
console.log(`Early dog years: ${earlyYears} Later dog years: ${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears; //my age in dog years
let myName = 'Ezra'.toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
