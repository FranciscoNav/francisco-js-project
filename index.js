document.addEventListener('DOMContentLoaded', ()=>{
    getAllMemes()
    console.log('Pages was loaded')
})

function getAllMemes() {
    fetch('https://api.imgflip.com/get_memes')
    .then(resp => resp.json())
    .then(data => {
        const mainContent = document.getElementById('main-content')
        const memeName = data.data.memes.forEach(element => console.log(element.name))
    })
}


function render(params) {
    
}