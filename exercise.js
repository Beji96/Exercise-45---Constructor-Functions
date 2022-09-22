function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let smartphone1 = new Smartphone("Xiaomi", "Note 11", 1500);
let smartphone2 = new Smartphone("Google", "Pixel 6 pro", 1000);

console.log(smartphone1);
console.log(smartphone2);
