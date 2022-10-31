console.log('cargando api');

const URL ='https://api.thecatapi.com/v1/images/search'

fetch(URL)
 .then(res =>res.json())
 .then(data =>{
    const img = document.querySelectorAll("img[class='imagen-productos-home']")
    for(let i = 0;i < img.length; i++){
     img.src = data[0].url
    }
    
 })
