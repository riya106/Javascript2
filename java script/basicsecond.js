// 
//PRIMITIVE DATA type
//nn bb ss u its a basically a short trick to learn 
//let a=null;//n=null

let b=345;//n=number
let c=true;//b=boolean
let d=BigInt("346")+BigInt("4");//b =bigint
let e="harry";//s=string
let f=Symbol("i am a nice symbol")//symbol
let g=undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof c);
//non primitve data type=object in js
const item={
    "harry": true,
    "shubh":false,
    "lovish":76,
    "rohab":undefined

}
console.log(item["harry"])//work of object hm log koi key value pair bna skte hai isse or mapping wgera bna skte hai
//practice set qiestion 
let k="harry"
let m=6
console.log(k+m)
console.log(typeof (k+m))
const oop={
    name:"riya",
    class:12,
    help:"no"
}
oop['hello']="hii"
oop[name]="tanishka"
console.log(oop)
//chapter 2 
//expression and operator
let l=19;
let v=90;
console.log("l+v=",l+v)
console.log("l/v=",l/v)
console.log("l++=",l++)
console.log("l=",l)
console.log("++l",++l)
//comparison operator
let com1=7;
let com2=7;
console.log("com1==com2 is" ,com1==com2);
console.log("com1!=com2 is" ,com1!=com2);
console.log("com1===com2 is" ,com1===com2);//type aagr same nahi hua to ya false dikha degga but double equal to wala true hi dhikyga 
//logical operator
let x=5;
let y=6;
console.log(x<y && x!=5)
console.log(x<y || x!=5)
//conditonal statement
let H=prompt("hey what your AGE")
console.log(typeof H)//IT WILL ALWAYS BE A STRING
//is string ko hm change krnege number mai uska lia hm function use krneg
H=Number.parseInt(H);//FOR conversion
console.log(typeof H)
if(H>18){
    alert("this is a vlid age for the driving")
}
else{
    alert("this is an invalid age")
}
//Chapter 2
let age=prompt("what is your age")

if(age>10 && age<=20){
    alert("your age lies between 10 and 20")
}
else{
    alert("not a good age")
}
//switch statement 
let age1=prompt("what is your age ")
switch(age1){
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your is age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    default:
        console.log("your age is not valid")    


}
let number1=prompt("Write a number")
number1=Number.parseInt(number1)
if(number1 %2==0 && number1%3==0){
    console.log("your number is divided by 2 and 3")

}
else{
    console.log("your number is not dividoble by 2 and 3")
}
//terniry operator
let a=age>18?"you can drive ":"you cannot drive"
console.log(a)
    



