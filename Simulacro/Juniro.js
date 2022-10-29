

//      Renderizar Giphy Aleatorio 


  const callImgCat = async ()=>{
    
    const urlCats  = 'https://api.thecatapi.com/v1/images/search'
    try {

      const resp = await fetch(urlCats)
      const dataCat = await resp.json()

      const imgCatUrl = dataCat[0]?.url

      console.log(imgCatUrl)

      const gif =document.getElementById('Gif')

      function crearImgCat (){

        const newImgCat = document.createElement("img")
        
        newImgCat.setAttribute('src',`${imgCatUrl}`)

        console.log(newImgCat)

        gif.appendChild(newImgCat)

      }

      crearImgCat()



    } catch (error) {
      
    }
  }
    
      callImgCat()




 

















// hacer esto en la app para ver que onda 

    const urlFats = 'https://catfact.ninja/fact'

    const Facts = async ()=>{  // Function para poder Renderizar Texto Aleatorio y las primeras 3 palabras

      try { // esto se hace ya que la function es async , de esta forma me da el tiempo para que los valores se cargen 
            const resp = await fetch(urlFats)
            const date = await resp.json()


             const texto = await date.fact
                                            // con split. tranformo el valor en array y luego con slice solo utilizo del 0 al 3 
             const textoFinal = texto.split(' ').slice(0,3).toString()

         
             
           console.log(textoFinal)

          
          
           const FactId = document.getElementById('fact')



   function crearFact (){ // Function Secundaria o interna 

            const articulo = document.createElement('article') // creo un articulo que se utilizara para llevar el string necesario al "id"
                            //                                  "fact" de html. de esta fomra el string se vera en la pantalla
                     
            const p = document.createElement('p')     // creo una const llamada "p" que tendra un valor en "html" al igual que un parrafo. de esta 
                                      //            forma el texto lo puedo renderizar 
                                      
              p.textContent = textoFinal  // indico que el valor Solicitado es igual que al "p.textConten" osea que la info de     
                            //              textofinal , en este caso un string se guardara en en el contenido del Parrafo
          
          articulo.appendChild(p)   // al valor de articulo le paso como childer la const "p" la cual tiene el string de "textoFinal"
          
          FactId.appendChild(articulo) // Dentro del elemento "FactId" que hace refernecia al "id:Fact" del DIV del HTML se pasara como 
          //                      childer el valor "articulo" el cual tiene sus propios child 
                          }

            crearFact() // Inicio la function Secundarioa 
              
          

       
      } catch (error) {
        
      }
    }
    
    Facts() // Function Principal para renederizar el Texto 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // producto.forEach(FactId)
    //____ Primer ejemplo____________________________________________________________
/*

   const finish = await date.fact // con el ? le indico que me puede devolver o no ? 
   const     dfinish = finish.split(' ').slice(0,3).toString()  // de esta forma consigo Frecmentar el arry separa las 3 primeras palabras y luego tranformo a string con toString()

 console.log(`Texto completo : ${finish} \n\n\n Texto : ${dfinish}`)

   const FactId = document.getElementById("fact")// Creo el elemento "FactID" con referencia al id de "fact"
   // de esat forma puedo trabajar con el div del html
//___________________
   function crearFact (producto){   // creo una function , donde creo una variable en "js" pero en htlm 
     //  Es un articulo 
     const articulo = document.createElement("article") // 

     const p = document.createElement('H1')      // creo la constante "p" que hace referncia a un "parrafo " en html
                                 // puedo pasar "h1-p-img" que se vera reflejado en el "html"


     p.textContent = dfinish     // Luego indico que "p.textContent" es igual al dato que necesito utilizar.
                 //            en este caso el valor es "las 3 primeras palabras de un array que poreviamente de destructuro
                   //          en la variable (dFinish) "

     articulo.appendChild(p)     // indico que la variable "articulo" va a tener un childer con la propiedad de "p"
                             //    De esta fomra le indico dentro del articulo creado se guardara un "p" parrafo con los datos 
                         //            de "dfinish"
     FactId.appendChild(articulo)
   }
//___________________________________         
   crearFact() // indico que se active al function 

   */