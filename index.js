document.addEventListener('DOMContentLoaded', ()=>{
    getAllMemes()
    console.log('Pages was loaded successfully')
})

function getAllMemes() {
    fetch('https://api.imgflip.com/get_memes')
    .then(resp => resp.json())
    .then(data => {
        const memeList = document.getElementById('memes-list')
        const memeArry = data.data.memes
        memeList.innerHTML = renderAllMemeNames(memeArry)
    })
    memeListListener()
}

function renderAllMemeNames(Arry) {
    return Arry.map(element => renderListItems(element)).join('')
}

function renderListItems(element) {
    return `
     <li id="meme" class = meme-li data-type=${element.url}> ${element.name}
        <button id='button' type="Like-button">&#x2661;</button>
     </li>
     `
}

function memeListListener() {
    const memeList = document.getElementById('memes-list')
    memeList.addEventListener('click',handleClick)
}

function handleClick(event) {
    if (event.target.id === 'meme') {
        displayMeme(event)
    }else{
        displayHeart(event)
    }
}

function displayMeme(event) {
    const clickedData = event.target.dataset.type
    console.log(event.target.id)

    if(event.target.childElementCount === 2){
        const childNode = event.target.children[1]
        event.target.removeChild(childNode)
    }else{
        const imgTag = document.createElement('img')
        imgTag.src = clickedData
        event.target.appendChild(imgTag)
    }
}

function displayHeart(event) {
    let heartButton = event.target
    const fullHeart = '&#x2764'
    const emptyHeart = '&#x2661'

    if(heartButton.className === 'activated-heart'){
        heartButton.innerHTML = emptyHeart
        heartButton.className = ""
    }else{
        heartButton.innerHTML = fullHeart
        heartButton.className = 'activated-heart'
    } 
    console.log(heartButton.innerHTML)
}

