// my basic approach
// let IconEl = document.getElementById("icon-el")
// let ParEl = document.getElementById("par-el")

// let par = " ";

// function header() {
//    // alert('clicked')
//     par +=  `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. `
//     ParEl.textContent = par
//     console.log(par)          
// }


let parEl = document.querySelector(".par_el")
let parEl1 = document.querySelector(".par_el1")
let parEl2 = document.querySelector(".par_el2")
let parEl3 = document.querySelector(".par_el3")
let parEl4 = document.querySelector(".par_el4")


function showHideContent() {
  parEl.classList.toggle("hide")
}

function showHideContent_1() {
  parEl1.classList.toggle("hide")
}

function showHideContent_2() {
  parEl2.classList.toggle("hide")
}

function showHideContent_3() {
  parEl3.classList.toggle("hide")
}

function showHideContent_4() {
  parEl4.classList.toggle("hide")
}