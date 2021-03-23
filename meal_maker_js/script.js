const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  set mains(main) {
    this._courses.mains.push(main);
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice
    }
    if(courseName === 'appetizer'){
      this.appetizers = dish;
    }else if(courseName === 'main'){
      this.mains = dish;
    }else if(courseName === 'dessert'){
      this.desserts = dish;
    }else{
      console.log('Enter a appetizer, main, or dessert dish.');
    }
  },
  getRandomDishFromCourse(courseName){
    
  }
};

//menu.addDishToCourse('appetizer', 'bread', 10.50);
console.log(menu.courses);
