
let listOfNumber = [1,2,5,8,7,9,10,20,5,8]
let total = 0
const countOfNumbers =() => {
   for(let i in listOfNumber){
      total+= listOfNumber[i]
   }
   console.log(total)
}
countOfNumbers()







let counter = 0
const buttonFun = () => {
   counter++
   let element = document.getElementById("navtoggle");
   element.classList.add("active");
   let elements = document.getElementById("nav");
   elements.classList.add("active");
   console.log(counter)

   if (counter % 2 === 0){
      let elemen = document.getElementById("nav");
      elemen.classList.remove("active");
      let eleme = document.getElementById("navtoggle");
      eleme.classList.remove("active");
   }
}
if (window.pageYOffset < 50){
   let elements = document.getElementById("header");
   elements.classList.add("header--fixed");
}










