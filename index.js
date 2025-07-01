//console.log("Hello World");
//function sayHello(){
//console.log("Hello from sayHello function");
//}
//sayHello();
//console.log("This is a simple JavaScript program");
//console.log("one");
//console.log("two");
//setTimeout(()=>{
  //  console.log("Hello World");
//},5000);
//console.log("three");
//console.log("four");

// a callback is a function that is passed as an argument to another function 
//and is executed after the completion of that function.

//callback example
/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,ds){
    ds(a,b);
}
calculator(5,10,sum);


calculator(5,10,(a,b)=>{
    console.log(a+b);
});
 */
 /* console.log("one");
 console.log("two");
 const hello = ()=>{
    console.log("Hello World");
 }
 setTimeout(hello,5000);
 console.log("three");
 console.log("four"); */

 //nested for loops example
 /* for(let i = 0; i < 5; i++)
 {
    let str = "";
    for(let j = 0; j < 5; j++)
    {
        str += j;
    }
 }
 console.log(i,str); */
/* 
 /* function getData(dataid){
    setTimeout(()=> {
        console.log("Fetching data for id:",dataid);
    },5000); 
 } */
 /* getData(1);
 getData(2);
 getData(3); 

 function getData(dataid,getnextdata) {
    setTimeout(() => {
        console.log("Fetching data for id dataid");
        if(getnextdata){
            getnextdata();
        }
    },5000);
 } */

//console.log("Hello World");
//function sayHello(){
//console.log("Hello from sayHello function");
//}
//sayHello();
//console.log("This is a simple JavaScript program");
//console.log("one");
//console.log("two");
//setTimeout(()=>{
  //  console.log("Hello World");
//},5000);
//console.log("three");
//console.log("four");

// a callback is a function that is passed as an argument to another function 
//and is executed after the completion of that function.

//callback example
/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,ds){
    ds(a,b);
}
calculator(5,10,sum);


calculator(5,10,(a,b)=>{
    console.log(a+b);
});
 */
 /* console.log("one");
 console.log("two");
 const hello = ()=>{
    console.log("Hello World");
 }
 setTimeout(hello,5000);
 console.log("three");
 console.log("four"); */

 //nested for loops example
 /* for(let i = 0; i < 5; i++)
 {
    let str = "";
    for(let j = 0; j < 5; j++)
    {
        str += j;
    }
 }
 console.log(i,str); */

 /* function getData(dataid){
    setTimeout(()=> {
        console.log("Fetching data for id:",dataid);
    },5000);
 }
 getData(1);
 getData(2);
 getData(3); */

 /* function getData(dataid,getnextdata) {
    setTimeout(() => {
        console.log("Fetching data for id dataid");
        if(getnextdata){
            getnextdata();
        }
    },5000);
 } */

 const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success = false;
        //simulate success or failure
        if (success){
            resolve("Data fetched successfullly");
        } else{
            reject("Error fetching data");
        }
    },2000);
 });
 myPromise
 .then((data)=>{
    console.log("promise resolved with data:",data);
 })
 .catch((error)=>{
    console.log("Promise rejected with error:",error);
 }) 

let promise= new Promise((resolve,reject)=>{
    console.log("Iam a promise");
    if(1<0){
        resolve(123);
    }
    reject("Something went wrong");
}
); 

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
        },2000);
    });
}
let result=getData(123);
result;
getData(101)
    .then(result=>{
        console.log("First fetch:", result);
        return getData(102);
    })
    .then(result=>{
        console.log("Second fetch:", result);
        return getData(103);
    })
