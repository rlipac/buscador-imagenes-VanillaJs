

const header =`


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css?3" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <style>

  
    .container {
      
      min-height: 100%;
      margin: 0 auto -50px;
    }
   
    
    header{
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index:20;
    }
    footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
   }
    . mi-navbar{
     
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }
   
 
    .card-container{
        margin-top:5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;     
    }
    .card{
       
        width: 18rem;
        margin-bottom:0.5rem;  
        
    }
   
    .tags{
      display: block;
     
     
    }
    
    .vistas{
        display: inline-block;
        margin: 0.1rem 1rem;
       
     
    }
    .likes{
      display: inline-block;
      margin: 0.1rem 1rem;
    }
    .boton-card{

      display: block;
      margin: 0.5rem 0.1rem;
    }
    
    @media (max-width: 600px) {
      nav > div.container-fluid{
        
        padding: 0rem!important;
      }
      #search{
        
        max-width: 250px;
        max-height: 10px;
        font-size: 1rem;
        
        
       
      }
      #buscar{
        font-size: 0.8rem;
       
        
      }
      a.navbar-brand{
        
        font-size: 1rem;
        text-align: center;
        
      }
    }
   
</style>

<script>
    
const KEYPIXABAY = require('../data.js');
console.log(KEYPIXABAY, 'mi-key');

 const limpiar=()=>{
  const cardNodo = document.getElementById("cardContainer");
  cardNodo.parentNode.removeChild(cardNodo);
  console.log('borrando nodos...');
 }

const buscarImagen = ()=>{
  if(document.getElementById("cardContainer")){
    limpiar();
  }
  
  const palabra = document.getElementById("search").value;
  
  const URL = 'https://pixabay.com/api/?key='+ KEYPIXABAY +'&q='+palabra+'&image_type=photo';
  fetch(URL)
  .then(response => response.json())
  .then(resultado =>resultado.hits.forEach(item => {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add("card-container");
    cardContainer.setAttribute("id", "cardContainer")
    document.getElementById("miContainer").appendChild(cardContainer);

      const cardBox = document.createElement('div');
      const cardClass = 'card-'+item.id;
      const cardId= '.'+ cardClass ; //? le ponemos un punto para agregarlo como clase en el querySelector
     
      cardBox.classList.add("card", cardClass, "shadow", "mb-3", "bg-body", "rounded");
      document.querySelector('.card-container').appendChild(cardBox);
     
      console.log(item);

      
      const image = document.createElement('img');
      image.src=item.previewURL;
      image.classList.add('card-img-top');
      setTimeout( ()=>{
        image.src=item.largeImageURL;
      },1000)  
      document.querySelector(cardId).appendChild(image);

      
      const cardBody = document.createElement('div');
      const cardBodyClass = 'card-body-'+item.id;
      const cardBodyId= '.'+ cardBodyClass ; //? le ponemos un punto para agregarlo como clase en el querySelector
      cardBody.classList.add("card-body", cardBodyClass);
      document.querySelector(cardId).appendChild(cardBody);
      
        const tags = document.createElement('p');
        const nunTags = document.createTextNode('Tags: '+item.tags);
        tags.appendChild(nunTags);
        tags.classList.add("card-text", "tags");
        document.querySelector(cardBodyId).appendChild(tags);

        const views = document.createElement('p');
        const nunViews = document.createTextNode('Vistas: '+item.views);
        views.appendChild(nunViews);
        views.classList.add('vistas');
        document.querySelector(cardBodyId).appendChild(views);

        const likes = document.createElement('p');
        const nunLikes = document.createTextNode('Likes: '+item.likes);
        likes.appendChild(nunLikes);
        likes.classList.add('likes');
        document.querySelector(cardBodyId).appendChild(likes);

        const pagina = document.createElement('a');
        pagina.setAttribute("href", item.largeImageURL)
        const paginaText = document.createTextNode('Ampliar ');
        pagina.appendChild(paginaText);
        pagina.classList.add('btn', 'btn-primary', 'boton-card');
        document.querySelector(cardBodyId).appendChild(pagina);


  
  
  }))
  .catch(error => console.log('error', error)); 
}


                    
        

</script>
   
    </head>
  <body>
  <header>
  <script>
   
  const entrada = document.getElementById("search");
  entrada.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buscar").click();
  }
  });


</script> 
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid d-flex justify-content-around p-5 ">
        <a class="navbar-brand " href="#">Buscador de Imagenes con Node.js y Vanila Js</a>
        
            
            <form class="d-flex mi-form " role="search">           
                <input class="form-control form-control-lg me-2" type="search" placeholder="Search" aria-label="Search" id="search">
                 <button class="btn btn-outline-success" type="submit" onclick=" buscarImagen();" id="buscar">Search</button>
            </form>
        
      
       
    </div>
</nav>

 

     
  </header>
 

`
;

module.exports= header;
