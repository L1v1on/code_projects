const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (typeof end == 'undefined') {
      end = start;
      start = 0;
    }
    if(start > end){
      let temp = start;
      start = end;
      end = temp;
    }
    if(number >= start && number < end){
      return true;
    }else {
      return false;
    }
  },
  words(string){
    return string.split(' ');
  },
  pad(string, length){
    if(string.length > length) return string;
    let padCount = length - string.length;
    let padStart = Math.floor(padCount/2);
    let padEnd = length - (string.length + padStart);
    let stringPadded = string.padStart(padStart+string.length);
    stringPadded = stringPadded.padEnd(padEnd+stringPadded.length);
    return stringPadded;
  },
  has(object, path){
    let value = object[path];
    if(typeof(value) == 'undefined') return false;
    return true;
  },
  invert(object){
    let invertObj = {};
    for (const [key, value] of Object.entries(object)) {
      //console.log(value + ' ' + key);
      invertObj[value] = key;
    }
    return invertObj;
  },
  findKey(object, predicate){
    for(const key in object){
      let value = object[key];
      predicateReturnValue = predicate(value);
      if(predicateReturnValue == true)return key;
    }
    return undefined;
  },
  drop(array, number=1){
    return array.slice(number);
  },
  dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index) => { return !predicate(element, index, array)});
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1){
    let arrayChunks = [];
    for (let index = 0; index < array.length; index=index+size) {
      let chunk = array.slice(index, index+size);
      arrayChunks.push(chunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;