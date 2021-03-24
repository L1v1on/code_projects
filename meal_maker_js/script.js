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
    let dishes;
    if (courseName === 'appetizer') {
      dishes = this.appetizers;
    } else if (courseName === 'main') {
      dishes = this.mains;
    } else if (courseName === 'dessert') {
      dishes = this.desserts;
    } else {
      console.log('Enter a appetizer, main, or dessert dish.');
    }
    //console.log(dishes);
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizer');
    let main = this.getRandomDishFromCourse('main');
    let dessert = this.getRandomDishFromCourse('dessert');
    let total = appetizer[1] + main[1] + dessert[1];
    return `${appetizer}, ${main}, ${dessert}: ${total}`;
  }
};

menu.addDishToCourse('appetizer', 'bread', 10.50);
console.log(menu.getRandomDishFromCourse('appetizer'));
