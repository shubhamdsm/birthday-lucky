let userDate = document.querySelector('#date');
let userMonth = document.querySelector('#month');
let userYear = document.querySelector('#year');
let userLuckyNumber = document.querySelector('#lucky');
let btn = document.querySelector("#btn")



function clickHandler(){
    let addBirth = userDate+userMonth+userYear;
    if(addBirth % userLuckyNumber===0){
        document.querySelector('#print').innerText = 'your birthday is lucky'
    }else{
        document.querySelector('#print').innerText = 'sorry your birthday is not lucky'
    }
    
}

btn.addEventListener('click',clickHandler)
