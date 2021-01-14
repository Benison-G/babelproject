class Student {
    constructor(fname, lname, age, address) {
       this.fname = fname;
       this.lname = lname;
       this.age = age;
       this.address = address;
    }
 
    get fullname() {
       return this.fname +"-"+this.lname;
    }
 }

// const compile using babel
let a =1;
if (a == 1) {
   const age = 10;
}
console.log(age);

// let compile using babel
if (a == 1) {
   let a = 2;
   console.log(a);
}
console.log(a);