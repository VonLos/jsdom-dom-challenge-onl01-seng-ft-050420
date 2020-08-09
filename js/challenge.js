const heart = document.getElementById('heart')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const likes = document.querySelector('ul.likes')
const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const button = document.querySelectorAll('button')
let seconds = 0
let likeCounter = 0
let timer = undefined

function counterStart() {
    let timer = setInterval()
    counter.innerHTML = seconds++
}

function incrementCounter(){
    seconds++
}


function decrementCounter(){
    seconds--
}


function like(e) {
    if(counter.innerText === seconds) {
        likeCounter++
        let li = document.createElement('li')
        li.innerText = `${counter.innerText} is liked ${likeCounter} times!`
        likes.appendChild(li)
    }
    else {
    let likeCounter = 0
    likeCounter++
    let li = document.createElement('li')
    li.innerText = `${counter.innerText} is liked ${likeCounter} times!`
    likes.appendChild(li)
    }
}


function pauseHandler() {
    let i = 0
    while (i < button.length) {
    button[i].disabled = true
    i++
    }
    clearInterval(timer)
}

heart.addEventListener('click', like)
minus.addEventListener('click', decrementCounter)
plus.addEventListener('click', incrementCounter)
pause.addEventListener('click', pauseHandler)
document.addEventListener('DOMContentLoaded', counterStart)

