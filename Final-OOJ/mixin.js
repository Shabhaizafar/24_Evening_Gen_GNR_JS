// blueprint : class 
class All{

};

// Parent Class : 
const Father = (sclass) => class extends sclass{
    Fathername = "Rajesh Bhai";
}
const Mother = (sclass) => class extends sclass{
    Mothername = "Rina Ben";
}

// Main
class Main{
    constructor(sclass){
        this.sclass = sclass;   // {}
        
    }
    Connector(...newArr){
          return newArr.reduce((currentClass,nextClass)=>nextClass(currentClass),this.sclass);
    }
}

// Final 
const Final = (a)=> new Main(a);

class Child extends Final(All).Connector(Father,Mother){
    Childname = "Raj";
}

const c1 = new Child();

console.log(c1);

