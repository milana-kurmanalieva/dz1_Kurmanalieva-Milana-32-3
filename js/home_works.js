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

let positionX = 0
let positionY = 0
let widthBlock = 448
const child = document.querySelector('.child_block')

const animateIn = ()=> {
    child.style.left = `${positionX}px`
    child.style.top = `${positionY}px`
    if (positionX < widthBlock && positionY === 0){
        positionX++
        setTimeout(animateIn , 4)
    }else if (positionX === widthBlock && positionY < widthBlock){
        positionY++
        setTimeout(animateIn, 4)
    }else if ( positionY === widthBlock && positionX !== 0){
        positionX--
        setTimeout(animateIn, 4)
    }else if (positionX === 0 && positionY !== 0){
        positionY--
        setTimeout(animateIn, 4)
    }
}
animateIn()

