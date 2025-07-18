// function add(x,y)
// {
//     return x + y;
// }

// console.log(add(10,20));

//-----------------------------------------exported to import.js
// export function add(x,y)
// {
//     return x + y;
// }

// export function sub(x,y)
// {
//     return x - y;
// }


//---------------------------------export when only 1 funtion-------------------
// function sub(x,y)
// {
//     return x - y;
// }
// export default sub;

//-------------------------------Synchronus-----------------------------------

console.log("Program started");

console.log("Fetching data from and API");

console.log("Closing our Application");

//----------------------------Asynchronus--------------------------------------------

console.log("Program started");

setTimeout(() =>{
   console.log("Fetching data from and API");

}, 5000);

console.log("Closing our Application");
//-----------------------------------we have 3 ways to solve asynchronous problem------------------------------

//----------------------------------------Asynchronous with callback ------------------------------------------


// const datas = [
//     {name:"ABC", Profession:"Software Developer"},
//     {name:"XYZ", Profession:"Software Tester"}
// ];

// function getDatas()
// {
//     setTimeout(() => {
//         let output ="";
//         datas.forEach( (data, index)=>{
//             output += ` <li> ${data.name} - ${data.Profession} </li>`
//         })

//          document.body.innerHTML = output;
//     }, 3000);
// }

// function createDatas(newData , callback){
//     setTimeout(() => {
//         datas.push(newData);
//         callback();
//     }, 5000);
// }

// createDatas({name:"Sam", Profession:"DB Admn"} , getDatas);

//------------------------------------------Promise---------------------------

// const datas = [
//     {name:"ABC", Profession:"Software Developer"},
//     {name:"XYZ", Profession:"Software Tester"}
// ];

// function getDatas()
// {
//     setTimeout(() => {
//         let output ="";
//         datas.forEach( (data, index)=>{
//             output += ` <li> ${data.name} - ${data.Profession} </li>`  //`` introduced in ES6
//         })
//          document.body.innerHTML = output;
//     }, 3000);
// }

// function createDatas(newData){

//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         datas.push(newData); 

//         let error = false;  //dynamically created error to understand the resolve and reject , change it to true to reject()
//         if(!error)
//         {
//             resolve();
//         }
//         else{
//             reject("Some error ocurred.......");
//         }
//     }, 5000);

//     })
    
// }

// createDatas({name:"Sam", Profession:"DB Admn"} )
// .then(getDatas)     
// .catch(err=>console.log(err));



//-----------------------------------async/await-------------------------------
const datas = [
    {name:"ABC", Profession:"Software Developer"},
    {name:"XYZ", Profession:"Software Tester"}
];

function getDatas()
{
    setTimeout(() => {
        let output ="";
        datas.forEach( (data, index)=>{
            output += ` <li> ${data.name} - ${data.Profession} </li>`
        })
         document.body.innerHTML = output;
    }, 3000);
}

function createDatas(newData){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        datas.push(newData); 

        let error = false;  //dynamically created error to understand the resolve and reject , change it to true to reject()
        if(!error)
        {
            resolve();
        }
        else{
            reject("Some error ocurred.......");
        }
    }, 5000);

    })
    
}
async function start()  //async tells promise to execute
{
    await createDatas({name:"Sam", Profession:"DB Admn"} );   //this is promise
    getDatas();  //tells getDatas() to wait until promise is executed
}

start();
