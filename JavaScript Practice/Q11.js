let car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    getInfo: function() {
      return this.year + ' ' + this.make + ' ' + this.model + ' in ' + this.color;
    }
  };

let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Fiction",
    getSummary: function() {
      return this.title + ' by ' + this.author + ', published in ' + this.publishedYear;
    }
  };
  

  let mergedObj={...car1,...book1};

  console.log(mergedObj);