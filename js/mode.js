const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


const toggelBtns = ()=>{
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
}

if(localStorage.getItem('mode')){
    toggelBtns()
}

darkBtn.addEventListener("click", ()=>{
    toggelBtns()
    localStorage.setItem('mode','dark-mode')
})


lightBtn.addEventListener("click", ()=>{
    toggelBtns()
    localStorage.setItem('mode','')
})