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
/* const getpromise= () =>{
    return new Promise((resolve,reject)) => {
        console.log("I am a promise");
        reject("Something went wrong");
    }
}
let result = getpromise();
result 
      .then(data =>{
        console.log(data);
      })
      result .catch(error =>{
        console.error("Error occured:",error);
      }) */

// promise chgaining

/* function asyncFunc1(){
            return new Promise((resolve,reject) =>{
                setTimeout(() =>{
                    console.log("data1");
                    resolve("success");
                },2000);
            });
        }
        function asyncFunc2(){
            return new Promise((resolve,reject) =>{
                setTimeout(() =>{
                    console.log("data2");
                    resolve("success");
                },4000)
            });
        }
        console.log("fetching data 1...");
        let p1=asyncFunc1();
        p1.then((data)=>{
            console.log("Data fetched:",data);
            console.log("fetching data 2...");
            let p2=asyncFunc2();
            p2.then((data)=>{
                console.log("Data fetched:",data);
            });
        });

function getData(id){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Fetching data for id:",id);
                    resolve(id);
                }, 1000)
            });
        }

        async function fetchData(){
            try {
                const data1 = await getData(101);
                console.log("First fetch:",data1);
                const data2 = await getData(102);
                console.log("Second fetch:",data2);
                const data3 = await getData(103);
                console.log("Second fetch:",data3);
            } catch (error) {
                console.log("Errorr occurred:",error);
            }
        }

        async function getnextData(){
            console.log("getting data 1.....");
            await getData(1);
            console.log("getting data 2.....");
            await getData(2);
            console.log("getting data 3.....");
            await getData(3);
        }  */