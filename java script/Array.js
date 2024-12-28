//array
let marks=[12,13,14,false,"notgiven"]
console.log(marks)
console.log(marks.length)
console.log(typeof marks)
//some methods of array
let b=marks.toString()
console.log(b)
//join method is used to join the elenets of the array by jointer
let c=marks.join("-")
console.log(c)
//we even can use a pop methid to remove the last element of the array by using this method
marks.pop()
console.log(marks)
// we vcan add new element by push 
marks.push(78)
console.log(marks)
let num=[1,2,3,4,5,6,7]
let num2=[78,1,2,1,3,4]
console.log(num.length)
delete num[0]//it is used to delete the item but it does not show the change in the length 

console.log(num.length)
//try to concat the array
let newarray=num.concat(num2)
console.log(newarray)
//sort method
//ek function bnate hai sorting ka lia 
let comapre=(a,b)=>{
    return a-b//ascending order
}
num2.sort(comapre)
console.log(num2)
//if we want to reverse the array
num.reverse()
console.log(num)
//splice and slice
//splice is used to add new elemnts to a array it can be 2 or more then 2 
//splice(a,b,c,d)here a=kha sa b=kitne c and d konse add krne hai
num.splice(2,3,6,7,8)
console.log(num)
//slice new arry bnan padta hai purana array ko modify nahin krta hai ye 
let newone=num.slice(3)
console.log(newone)
//create a function 
//for.....each
num.forEach((element)  => {
    console.log(element*element)//when we want to do operation on the array elemnt
})
let name5="Riya"
let arr9=Array.from(name5)//creating a array from string
console.log(arr)
//for..of
for(let i of num){
    console.log(i)//it is used to print the elemnts of the array
}
//for..in
for(let i in num){
    console.log(i)//it is used to print the keys means index of the array
}
//map craetes a new array by performing some operations but for each do not create a new array
let arr2=[45,78,90,31]
//map ka use krte hai 
let a =arr2.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
//array filter method
let b0= arr2.filter((a)=>{
    return a<60
})
console.log(b0,arr2)
//array reduce method is used to some the elemnts like first 2 sum kiya 3 rd wale ko sum kiya like that at last
let arr3=[1,2,3,4,5,6]
let newarr=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr)
//practice problem 
//1st
let arr6=[1,2,3,34,4,56]
let j;
do{
 j=prompt("enter a number")
a=Number.parseInt()
arr6.push(j)
}
//problem 2

while(a!=0);
console.log(arr6)
//actaully tb tk hmko isko krna hia jb tk hmra dalla hua no 0 ka equal nahi ho jatta hai 
//use of filter function
let utr=[12,80,40,90,28,23]
 let p=utr.filter((value)=>{
    return value%10==0;
 })
 console.log(p)
 //use of map
 let arr=[12,45,6,7]
 let h=arr.map((j)=>{
    return j*j
 })
 console.log(h)
 //for calulating the factorial a number we are using the reduce function
 let tt=[1,2,3,4,5]

 let r=tt.reduce((x1,x2)=>{
    return x1*x2
 })
 console.log(r)
