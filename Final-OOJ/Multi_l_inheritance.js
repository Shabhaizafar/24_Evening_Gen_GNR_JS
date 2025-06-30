class GrandFather{
    constructor(gname){
        this.GrandFathername = gname;
    }
}

class Father extends GrandFather{
    constructor(fname,gname){
        super(gname);
        this.Fathername = fname;
    }
}

class Child extends Father{
    constructor(cname,fname,gname){
        super(fname,gname);
        this.Childname = cname;
    }
}


var obj1 = new Child("Raj","Rajesh","Rajendra");
console.log(obj1);