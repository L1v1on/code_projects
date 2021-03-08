let input = 'turpentine and turtles';
let vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = [];

// check input for vowels
for(let i = 0; i < input.length; i++){
    //console.log(input[i]);
    for(let j = 0; j < vowels.length; j++){
        //console.log(vowels[j]);
        if(input[i].toLocaleUpperCase() === vowels[j]){
            resultArray.push(vowels[j]);
            if(vowels[j] === 'E'){
                resultArray.push(vowels[j]);
            }
            if (vowels[j] === 'U') {
              resultArray.push(vowels[j]);
            }
            break;
        }
    }
}
console.log(resultArray.join(''));