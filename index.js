document.addEventListener('DOMContentLoaded', ()=>{
    getAllMemes()
    console.log('Pages was loaded')
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
     <li id=${element.name} data-type=${element.url}> ${element.name}</li>
    `
}

function memeListListener() {
    const memeList = document.getElementById('memes-list')
    memeList.addEventListener('click',displayMeme)
}

function displayMeme(event) {
    console.log(event.target)
    const imgTag = document.createElement('img')
    imgTag.src = event.target.dataset.type
    event.target.appendChild(imgTag)
}

