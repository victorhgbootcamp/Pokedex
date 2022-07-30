const div$$ = document.querySelector(".container");
const divGaleria$$ = document.querySelector(".galeria");
const input$$ = document.querySelector("input");
const pokeball = document.querySelector(".pokeball");
const divPadre = document.querySelector(".PADRE");
const reload$$ = document.querySelector(".reload")

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let index = 0; index < data.results.length; index++) {
      const element = data.results[index];
      fetch(element.url)
        .then((res) => {
          return res.json();
        })
        .then((datosPokemons) => {
          pintarPokemon(datosPokemons);
        });
    }
  });


const pintarPokemon = (datosPokemons) => {
  const divPoke$$ = document.createElement("div")
  const h3$$ = document.createElement("h3");
  h3$$.textContent = "# " + datosPokemons.id + " " + datosPokemons.name;
  divPoke$$.appendChild(h3$$);
  const img$$ = document.createElement("img");
  img$$.setAttribute("src", datosPokemons.sprites.other.dream_world.front_default);
  divPoke$$.appendChild(img$$);
  divGaleria$$.appendChild(divPoke$$);

}

pokeball.addEventListener("click", ()=> {
    div$$.innerHTML= ""
    traerPokemon(input$$.value.toLowerCase());
    })


function traerPokemon(pokemon){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then((response) => {
          return response.json();
      })
      .then((data) => {
          crearPokemon(data)
          }
      )}
  
  function crearPokemon(pokemon){
      const divhijo = document.createElement("div");
      const h3 =document.createElement("h3");
      h3.textContent = "# " + pokemon.id + " " + pokemon.name;
      const img = document.createElement("img");
      img.src = pokemon.sprites.other.dream_world.front_default;
      divhijo.classList.add("hijo");  
      divhijo.appendChild(h3);
      divhijo.appendChild(img);
      div$$.appendChild(divhijo);
  }

  reload$$.addEventListener("click", ()=> {
    
    location.reload()});
    

// const div$$ = document.querySelector("div");

// fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
//   .then((response) => {
//     return response.json();
//   })
//   .then((pokemons) => {
//     pintarNombres(pokemons.results);
//   });

// const pintarNombres = (pokemons) => {
//   for (const pokemon of pokemons) {
//     const p$$ = document.createElement("p");
//     p$$.textContent = pokemon.name;
//     div$$.appendChild(p$$);
//     pintarImg(pokemon)
//   }
// };

// const pintarImg = (pokemon) => {

//   fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
//   .then((response) => {
//     return response.json();
//   })
//   .then((pokemons) => {

// const img$$ = document.createElement("img")
// img$$.setAttribute("src", pokemons.sprites.other.dream_world.front_default)
// div$$.appendChild(img$$)

// })

// }
