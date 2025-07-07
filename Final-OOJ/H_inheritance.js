class Vehicle{
    constructor(brand,price){
        this.brandname = brand;
        this.price = price;
    }
}

class Car extends Vehicle{
    constructor(brand,price){
        super(brand,price);
    }
    runCar(){
        console.log("Car Running");
    }
};

class Bike extends Vehicle{
    constructor(brand,price){
        super(brand,price);
    }
    flybike(){
        console.log("Bike can Fly");
    }
};


const c1 = new Car("Tata","1$");
const b1 = new Bike("Honda","1000$");

c1.runCar();
b1.flybike();

console.log(c1.brandname);
console.log(b1.brandname);

console.log(c1.price);
console.log(b1.price);















