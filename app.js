let userDate = document.querySelector('#date');
let userMonth = document.querySelector('#month');
let userYear = document.querySelector('#year');
let userLuckyNumber = document.querySelector('#lucky');
let btn = document.querySelector("#btn")



function clickHandler(){
    let addDate = Number(userDate.value);
    let addMonth = Number(userMonth.value);
    let addYear = Number(userYear.value);
    let addLuckyNumber = Number(userLuckyNumber.value);
    let addAll = addDate+addMonth+addYear;
   if(addAll % addLuckyNumber ===0){
        document.querySelector('#print').innerText = 'Your birthday is  lucky'
   }else{
       document.querySelector('#print').innerText = 'Your birthday is not lucky'
   }
}

btn.addEventListener('click',clickHandler)
