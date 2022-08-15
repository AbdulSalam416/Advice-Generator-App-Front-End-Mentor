



const icon = document.querySelector('#icon')
let advice_text = document.querySelector(".advice_text p")
let advice_id = document.querySelector("#advice_id")



let link = 'https://api.adviceslip.com/advice'


window.onload = ()=> results()

icon.addEventListener("click", results )


function results(){

    fetch(link).then((endpoint)=> endpoint.json())
    .then(data=> {

        let id = data.slip.id;
  
let advice = data.slip.advice;

advice_text.innerHTML=advice   
advice_id.innerHTML= "#" + id 
    })
.catch(error=>console.error(error))

}



