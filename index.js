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
}

function renderAllMemeNames(Arry) {
    return Arry.map(element => renderListItems(element)).join('')
}

function renderListItems(element) {
    return `
     <li id=${element.name}> ${element.name}</li>
    `
}





