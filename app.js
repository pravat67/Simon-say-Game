let random_arr = []
let user_arr = []

let arr = ["red","green","blue","yellow"]

let start = false
let level = 0

let a = document.querySelector("h2")


document.addEventListener("keypress",()=>{
    if(start == false){
        start = true
        levelup()
    }
})


function flashbtn(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },300)
}

function userflashbtn(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
        btn.classList.remove("userflash")
    },300)
}

function levelup() {
    level++;
    a.innerText = `Level ${level}`
    let b = Math.floor(Math.random() * 3)
    let col = arr[b]
    random_arr.push(col)
    console.log(random_arr)
    let c = document.querySelector(`.${col}`)
    flashbtn(c)
    user_arr = []
}

function check(){
    let ind = user_arr.length - 1
    if(user_arr[ind] === random_arr[ind]){
        if (user_arr.length == random_arr.length) {
            levelup()
        }
    }else{
        a.innerText = `Game over! Your score level ${level} Press again to start.`;
        document.querySelector("body").style.backgroundColor = "orangered"
        document.querySelector("h1").style.color = "white"
        document.querySelector("h2").style.color = "white"
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white"
            document.querySelector("h1").style.color = "black"
        document.querySelector("h2").style.color = "black"
        },300)
        reset()
    }
}

function btnpress(){
    console.log(this)
    let btn = this
    userflashbtn(btn)

    let user_press = btn.getAttribute("id")
    user_arr.push(user_press)
    check()
}



let cl = document.querySelectorAll(".btn")
for (let b of cl) {
    b.addEventListener("click",btnpress)
}

function reset() {
    start = false
    user_arr = []
    random_arr = []
    level = 0
}