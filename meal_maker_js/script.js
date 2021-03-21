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
    this._courses.appetizers = appetizer;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
};

console.log(menu.courses);
