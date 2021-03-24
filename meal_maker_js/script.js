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
    //console.log(dishes[index]);
    return dishes[index];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizer');
    let main = this.getRandomDishFromCourse('main');
    let dessert = this.getRandomDishFromCourse('dessert');
    let total = appetizer.price + main.price + dessert.price;
    //console.log(appetizer.price);
    return `${appetizer.name}, ${main.name}, ${dessert.name}: ${total}`;
  }
};

menu.addDishToCourse('appetizer', 'bread', 4.5);
menu.addDishToCourse('appetizer', 'salad', 5.5);
menu.addDishToCourse('appetizer', 'tea', 3.5);
menu.addDishToCourse('main', 'pizza', 15.5);
menu.addDishToCourse('main', 'steak', 20.5);
menu.addDishToCourse('main', 'burger', 10.5);
menu.addDishToCourse('dessert', 'cake', 9.5);
menu.addDishToCourse('dessert', 'pie', 7.5);
menu.addDishToCourse('dessert', 'cookie', 5.0);

let meal = menu.generateRandomMeal();
console.log(meal);