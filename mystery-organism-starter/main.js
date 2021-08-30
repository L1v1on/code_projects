// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory funtion
function pAequorFactory(num, dnaBase){
  let pAequor = {};
  pAequor.specimenNum = num;
  pAequor.dna = dnaBase;
  pAequor.mutate = function () {
    let randI = Math.floor(Math.random() * 15);
    let randBase = returnRandBase();
    if(this.dna[randI] == randBase){
      do{
        randBase = returnRandBase();
      }while(this.dna[randI] == randBase)
    }
    this.dna[randI] = randBase;
    return this.dna;
  };
  return pAequor;
}

let testDNA = pAequorFactory(1, mockUpStrand());
console.log(testDNA);
console.log('Activate mutation');
console.log(testDNA.mutate());