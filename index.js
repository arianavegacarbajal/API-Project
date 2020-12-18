let url = 'https://picsum.photos/600/300';


function pictureFetcher(){
fetch(url)
.then(function(result){
    console.log(result)
    displayResults(result);
})
}

function displayResults(result){
    const section = document.getElementById('image')
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let img = document.createElement('img');
    img.src = (result.url);
    document.getElementById('image').appendChild(img);
}

let button1 = document.querySelector('#button1');


let numberOfButtons = document.querySelectorAll('.button')
for (let i = 0; i < numberOfButtons.length; i++){
    numberOfButtons[i].addEventListener('click', pictureFetcher)
}