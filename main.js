// const ages =[ 21,1,2,2,12,12,3,31,23,2,3,223,23,2,23,13,132,242,3,1,23,3,2,23,23]
// const companies= [
    //     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
//   const And = companies.reduce(function(total ,company){
//     return total+company.start
//   } ,0)
//   console.log(And);

// const alll =ages 
    //  .map(age =>age *20)
    //  .filter(age => age>=30)
    //  .sort((a,b)=> a-b)
    //  .reduce((a,b)=> a+b,0)
    
    // const para = document.querySelector("#para")
    // function message(){
        //     para.innerHTML = "hello from settimeout function"
// }
// setTimeout(function(){
//     para.innerHTML = "nma bovotiiiiiiiiiiiii";
// },5000);
// const message = document.querySelector(".sales")
// let interval = setInterval(() => {
    //     message.innerHTML+= "<h1> assalom munbay</h1>"
// }, 200);
// setTimeout(() =>{
    //     clearInterval(interval)
    // },2000)

    // let arr =[
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
        // {score: 3000, name :"olma",count :5000, name2: "anor"},
// {score: 3000, name :"olma",count :5000, name2: "anor"},
// {score: 3000, name :"olma",count :5000, name2: "anor"},
// ]


// function resalt(arr, str){
//     if(str === "olma"){
    

    // const olma=arr.reduce(function(total ,score){
        //         return total+score.score
        //       } ,0)
        //      return resalt;}if{
            //  const anor=arr.reduce(function(total ,count){
                //         return total+count.count
//       } ,0)
//      console.log(anor);}
//     }


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,];
// console.log(arr);

// //  sales.forEach((item, index, array) => {
    
    // // //   console.log("item: " + item);         // item: 1, item: 2 , item: 3 
    
    // // //   console.log("index: " + index);     // index: 0, index: 1, index: 2
    
    // //   console.log("array: " + array);    // array: [1,2,3], ...
    
    
    // // })
    // arr.includes(5)
    //     prompt(console.log(true) )
    
    
    
    
    // №7
    // function myFunction(a){
        //     for(let i =0; i<a.length; i++)
//     return a.indexOf("is");
// }
// console.log(myFunction("praise"));

// №8

// function first_half (str) {
//     if (str.length % 2 == 0) {
//       return str.slice(0, str.length / 2);
//     }
//     return str;
//   }
//   console.log(first_half("JavaScript"));
      // №9
      
      //       function first_half (str) {
//     return str.slice(0, -3)
//   }
//   console.log(first_half("JavaScript"));
// №10
//   function myFunction(a,b){
    //     return (a/100)*b
    //   }
    //   console.log(myFunction(100,50));
// №11
// function myFunction(a,b){
//     return a.indexOf(b)===-1 ? a-b:b+a
// }

// console.log(myFunction('lips', 's'));
//  №12
// function myFunction (a){
    //         return a%2 === 0
    // }
    // console.log(myFunction(5));
    //  №13
    function myFunction(a,b){
        let count =0
        for(let i = 0; i<b.length; i++){
            if(b.charAt(i) ==a){
                count+=1
            }
        }
       return count
    }
    console.log(myFunction('m', 'how many times does the character occur in this sentence?'));