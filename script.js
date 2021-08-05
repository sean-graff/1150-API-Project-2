const baseURL = "https://api.giphy.com/v1/gifs/random?api_key=oSFbwxD6VzKSAYwzQHlqsqo06lm0LkYv"


let eye = document.getElementById('searchPic'); 
let gifResults = document.querySelector('.gifResults');
eye.addEventListener('click', fetchGif);

async function fetchGif() {
    let response = await fetch(baseURL);
    let img = await response.json();  

    
    let displayGif = document.getElementById('gifResults');
    
    displayGif.src= img.data.images.downsized.url
    
    console.log(img.data.images.downsized.url)

    console.log(img);

}
