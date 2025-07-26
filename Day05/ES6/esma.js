//-----------------------------------------------ESA 2016----------------------------------------------

//------------------------------------------------template literals-----------------------------------

let name = "sameeksha";
let city = "mangaluru";


console.log("My name is ",name , "I'm from " , city);  //normal way

console.log(`My name is ${name} I'm from  ${city}`) ;   //template literals




//--------------------------------------------Destructuring of Array--------------------------------


let num = [10,20,30,40];
let [x,y,z,a] = num;


console.log(x);
console.log(y);
console.log(z);
console.log(a);


//---------------------------------------------------spread operators------------------------------------


let num1 = [10,20,30,40];

let second_num = [...num1, 50,60];

console.log(num1);
console.log(second_num);

//----------------------------------------------------rest operator---------------------------------------------

function displayName(...names)
{
    console.log(names);
}

displayName("Ajay","Sachin","Ravi","Ajeet");  //collectes all these elements and stores in names(single array or object)




function sum(...numbers){
    return numbers.reduce((a,b)=> a+b);
}

console.log(sum(10,3,45,23,1));

//-----------------------------------------------------classname and object---------------------------------------

class Employee{
    constructor(name)
    {
        this.name = name;
    }
    greet(){
        console.log(`Welcome : ${this.name}`);
    }
}

let emp = new Employee("Ajay");  //creating object using new and storing inside emp
let emp1 = new Employee("Sameeksha");
let emp2 = new Employee("Shriraksha");

emp.greet();
emp1.greet();
emp2.greet();

//--------------------------------------MAP and SET------------------------------------------------------

let emp3 = new Map(); //collection of data in the form of key ad values

emp3.set("id", "111");
emp3.set("name", "Ravi");
emp3.set("city", "Delhi");

console.log(emp3.get("id"), emp3.get("name"), emp3.get("city"));




let set = new Set();  //no duplicate eements are store here

set.add(10);
set.add(20);
set.add(20);  //even if i add 20 again, it is not stored since it can store only unique elements

console.log(set);
