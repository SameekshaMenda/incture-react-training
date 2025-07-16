// if (true)
// {
//     var x=10; //function-scoped
//     console.log("x :", x);
//     x = 20; //reinitializable  redeclarative 
// }

// console.log("x: ",x);


// if (true)
// {
//     let x=10;  //block-scoped
//     console.log("x :", x);
//     x = 20;  //reinitializable

//     let x = 30;
//     console.log("x :", x); //not redeclarative
// }

// //console.log("x: ",x);  //error



// if (true)
// {
//     const x=10;  
//     console.log("x :", x);
   

//      x = 30; //not reinitializable
//     console.log("x :", x); 
// }



//-----------------------------------Datatype-------------------------------------

// let x = 10;
// let y = "ABN";
// let z = true;
// let n = null;
// let t;
// let a = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999990888888n;

// console.log(typeof(a));









//--------------------------operator-------------------------------

//ternary operator
let age = 30;
(age>18) ? console.log("eligible") : console.log("Not eligible");



//--------------------------------------conditional statement----------------------------------

//if...else if...else
let marks = 7;

if(marks >= 90)
{
    console.log("Grade: A");
}

else if(marks >= 80 && marks < 90)
{
    console.log("Grade: B");
}

else if(marks >= 70 && marks < 80)
{
    console.log("Grade: C");
}

else if(marks >= 60 && marks < 70)
{
    console.log("Grade: D");
}
else{
    console.log("Fail");
}

//switch
let choice = 5;

switch(choice)
{
    case 1: console.log("Case 1 Executed...");
            break;

    case 2: console.log("Case 2 Executed...");
            break;

    case 3: console.log("Case 3 Executed...");
            break;

    case 4: console.log("Case 4 Executed...");
            break;

    default: console.log("enter a valid input")  ;      
}


//----------------------------------------------Array------------------------------------

let num = [10,20,30];
let num1 = new Array(10,20,40);
console.log(num,num1)


// let data = [10, 20, 30,,10,20, "arr", true];  //data container has multiple values
let data = [90 ,60, 40,70,10,80,20,]
// data[1] = 100;
// console.log(data[1]);
console.log(data.length);  

// for(let i = 0; i<= data.length -1 ; i++)
//     {
//         console.log(data[i]);

//     }  
    
// for(let x of data)
//     {
//         console.log(x);
//     }  

// console.log(data);

// data.push(89);
// console.log(data);

// data.unshift(400);
// console.log(data);

// data.pop();
// console.log(data);


// data.shift();
// console.log(data);

// console.log(data.indexOf(10))   
// console.log(data.lastindexOf(10))

data.sort();
console.log(data);

data.reverse();
console.log(data);

