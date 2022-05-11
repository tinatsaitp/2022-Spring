//PokeDex Source: https://www.youtube.com/watch?v=XL68br6JyYs&t=267s
const pokemons_num = 15;
const colors = {
  fire: '#ffa6a6', //lightred
  grass: '#c8ffa8', //lightgrassgreen
  electric: '#fffa9c', //lightyellow
  water: '#c7edff', //lightblue
  ground: '#ffe0c2', //lightorange
  rock: '#bababa', //lightgray
  fairy: '#ffccf8', //lightpink
  poison: '#e0b5ff', //lightpurple
  bug: '#9effb1', //lightgreen
  dragon: '#c7dbff', //lightgrassgreen
  psychic: '#fffd6b', //yellow
  flying: '#a8ffdf', //lightgreenblue
  fighting: '#ffbca6', //lightorangered
  normal: '#f5dfc1', //skin
  ice: '#e3ffff', //lightlightblue
  ghost: '#e0e0e0', //lightlightgray
  dark: '#7d7d7d', //lightblack
  steel: '#b3bbc9' //lightgrayblue
};
const main_types = Object.keys(colors);



let num = 0;
const search_poke = document.getElementById('search_poke');
const search_char = document.getElementById('search_char');



function clearContainer() {
      document.getElementById('search_poke').innerHTML = "";
      document.getElementById('search_char').innerHTML = "";
      num = 0;
};

$(function() {
  $("#search_btn").click(function() {
    let searchId = $("#search_input").val()
    $("#fail").text('')

    if (num !== 0) 
    {
      clearContainer();
    }

    if (searchId !== '') {
      $.getJSON(`https://pokeapi.co/api/v2/pokemon/${searchId}/`, function(data01) {
        console.log(data01);
        const pokemonEl01 = document.createElement('div');
        const name = data01.name[0].toUpperCase() + data01.name.slice(1);
        const poke_types = data01.types.map(type => type.type.name);
        const type = main_types.find(type => poke_types.indexOf(type) > -1);
        const color = colors[type];

        pokemonEl01.style.backgroundColor = color;
        pokemonEl01.style.height = "300px";
        pokemonEl01.style.borderRadius = "20px";
        //pokemonEl01.style.borderTopLeftRadius = "20px";
        //pokemonEl01.style.borderTopRightRadius = "20px";

        const pokeInnerHTML = `
        <div class="char-search">
              <br>
              <h2 class="name">${name}</h2>
              <img src=${data01.sprites.front_default} alt=""/>
              <h3 class="type">Type: <span>${poke_types}</span></h3>
        </div>
        `;
        pokemonEl01.innerHTML = pokeInnerHTML;

        $('#search_poke').append(pokemonEl01);

      })
      $.getJSON(`https://pokeapi.co/api/v2/characteristic/${searchId}/`, function(data02) {
        console.log(data02);
        const pokemonEl02 = document.createElement('div');
        const poke_char = data02.descriptions.map(pokename => pokename.description);
        const characteristic = poke_char.at(7);
        
        pokemonEl02.style.marginTop = "-80px";
        pokemonEl02.style.marginBottom = "20px";
        //pokemonEl02.style.backgroundColor = "pink";
        //pokemonEl02.style.borderBottomLeftRadius = "20px";
        //pokemonEl02.style.borderBottomRightRadius = "20px";          

        const pokeInnerHTML = `
        <div class="char-search">
              <h3 class="type">Characteristic: <span>${characteristic}</span></h3>
              <br>
              <br>
              <br>
        </div>
        `;
        pokemonEl02.innerHTML = pokeInnerHTML;

        $('#search_char').append(pokemonEl02);

      }).fail(function() {
        clearContainer();
        $('#fail').text("Please Re-Enter a Pokedex")
        console.log("we can't find anything")
      })
    }

    num++;

    //reset the input
    $('#search_input').val('')
  })
})