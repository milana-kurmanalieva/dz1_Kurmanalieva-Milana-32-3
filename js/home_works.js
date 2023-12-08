//Home work (part 1)

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w[a-z0-9._-]+@gmail.com$/i
const enter = ()=>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'Good'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Wrong'
        gmailResult.style.color = 'red'
    }
}
gmailButton.onclick = () => enter()
window.onkeydown = (event)=>{
    if (event.code === 'Enter'){
        enter()
    }
}

//Home work (part 2)

//
//TODO Вы можете попробовать и с requestAnimationFrame,
// а также ниже можно будет раскоментить и посмотреть с setTimeout

let count = 0
const child = document.querySelector('.child_block')
//
function animation ()  {
    child.style.left = `${count}px`
    count+=4
    if (count <=448){
        requestAnimationFrame(animation)
    }
}
animation()

// TODO setTimeout
// const animateIn = ()=> {
//     child.style.left = `${count}px`
//     count++
//     if (count <= 448){
//         setTimeout(animateIn , 4)
//     }
// }
// animateIn()

