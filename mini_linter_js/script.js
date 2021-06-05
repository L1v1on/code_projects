let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//strip out the unnecessary words from story
let re = /[\s,"!.-]/; //reguler expression to split the string into just the words
//using filter() makes join() unable to put the sentence back together properly
const storyWords = story.split(re).filter((word) => word.length >= 1); //remove the empty strings from split array.
console.log(storyWords);
console.log(storyWords.length);
const betterWords = storyWords.filter((word) => {
  for (i = 0; i < unnecessaryWords.length; i++) {
    //if(unnecessaryWords[i] == word) return false;
    if (word.includes(unnecessaryWords[i])) return false;
  }
  return true;
});
console.log(betterWords);
console.log(betterWords.length);

//find # of overusedWords
const count = {};
overusedWords.forEach(w => {
  count[w] = 0;  
});
//console.log(count);
for(i = 0; i < betterWords.length; i++){
  for(j = 0; j < overusedWords.length; j++){
    if(betterWords[i].includes(overusedWords[j])) count[overusedWords[j]]++;
  }
}
console.log('number of overused words', count);