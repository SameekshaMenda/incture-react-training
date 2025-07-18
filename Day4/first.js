function display(){

    console.log("hello");
    console.log("welcome!!");

}
display();
console.log("---------------after 10 min---------------------")
display();

//-------------------------------------------------------------- name function-------------------------

function greet(name)
{
          console.log("welcome: ", name);
}
greet("sameeksha");

//---------------------------------------------------------------
 
function addd(a, b){

    console.log(a+b);
}

addd(2,3)

//--------------------------------------

function add(a, b){

    return a+b;
}
let res = add(3,3);
console.log(res);

//-----------------------------------------Anonymous Function---------------------------------

let displayy = function(name){
        console.log("welcome: ", name);
    }
displayy("Ram")

//----------------------------------------------------------------------------------------------
let result = function(x,y){
    return x+y;
}
console.log(result(10,20));

//-----------------------------------Arrow function---------------------------------------
let resultt = (x,y) => {
    return x+y;
}
console.log(resultt(10,20));

//-------------------------------------------------------------

let ress = name => console.log("welcome:",name); // when there is a single parameter we can avoid the use of {}
ress("sam");

//-----------------------------------------------------------------------

let resluttt = (x,y,z) => x + y +z;
console.log(resluttt(89,90,100));

//----------------------------------------------------------------------------
let dissplay = setTimeout(() =>{
    console.log("welcome");

}, 5000);

dissplay;

//----------------------------------------callback functon-----------------

function greett( name, callback) //callback parameter will take saybye
{
    console.log("welcome:",name);
    callback();                      //calls saybye()
}
function saybye()
{
    console.log("bye!!");
}

greett("Sachin",saybye); //saybye is given as argument




//-----------------------------defaukt function----------------
function greettt( name = "Guest") //default is Guest
{
    console.log("welcome:",name);
                         
}
greettt("Sam");
greettt();  //output is Guest



//-------------------------------------------object----------------------------------

let employee = {
    id: 11,
    name: "Sameeksha",
    city: "Mangalore"
}
console.log(employee);
console.log(employee.city)     //accessing using . notation
console.log(employee["name"]); //accessing using [] notation

employee.salary = 45000;  // to add a new property
console.log(employee);


for(let key in employee)
{
    console.log("Key:", key ,"Value:" , employee[key]);
}

//----------------------------Destructuring Object------------------------------

let employeee = {
    id: 11,
    name: "Sameeksha",
    city: "Mangalore"
}

let {id,name, city} = employeee;
console.log(id);
console.log(name);
console.log(city);
