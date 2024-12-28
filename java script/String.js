//functions of java script
 function oneplusavg(x,y){
    return Math.round(1+(x+y)/2)
    
 }
 //different way of making the function
 const sum=(f,g)=>{
    return f+g
 }
 let a=1;
 let b=2;
 let c=3;
  console.log("one plus averge of a and b ",oneplusavg(a,b))
  console.log(sum(2,4))
  //string
  let name="Riya"
  console.log(name.length)
  console.log(name[0])
  console.log(name[1])
  //templet literlas
  let boy1="Aadarsh"
  let boy2="rishab"
  let sentence=`${boy2} is a friend of ${boy1}`//$is used for the writing a any boy index name
  console.log(sentence)
 //escape sequence charector==(\)
 let fruit='bana\'na'
 let apple='heal\tthy'//provide space
 
 console.log(apple)
 console.log(fruit) 
 console.log(fruit.length)
 console.log(boy2.toUpperCase())
 console.log(boy2.slice(2,3))//slice
 //replace methoid
 console.log(boy2.replace("ris","hur"))
 let name2='riya'
 let friend2='rishab'
 console.log(name2.concat("is a friend of",friend2))//conact is used to add the string together
 let friend3="     riyatyagi    "
 console.log(friend3)//if we want to trim the staring and ending spaces
 //we will use trim for that
 console.log(friend3.trim()) 
 let fr="advika"+" "+"babita"+"happy"
 console.log(fr)
 //chapter string practice set
 let str="riy\""
 console.log(str.length)
 const sentence5='the quick brown fox jumps into the garden';
 const word='fox'
 console.log(sentence5.includes(word))//.include function is used to 
//terniary oprtaor
//problem imp
let str2="please give Rs 1000"
let amout=str2.slice("please give Rs ".length)
console.log(amout)
//string mai hm log change bhi nahi kr skte hai 
//bcz string is immutable