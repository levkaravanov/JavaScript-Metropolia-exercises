const target = document.getElementById('target')
const img = document.getElementById('img')

function changePic () {
    const img = document.createElement('img')
    img.src = 'img/picB.jpg'
    target.appendChild(img)
}


target.addEventListener('mouseover', changePic)