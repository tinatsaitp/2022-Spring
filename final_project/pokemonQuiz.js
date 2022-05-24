//PokeDex Source: https://www.youtube.com/watch?v=XL68br6JyYs&t=267s
const card_colors = {
  normal: '#f5dfc1', //skin
  fighting: '#ffbca6', //lightorangered
  flying: '#a8ffdf', //lightgreenblue
  poison: '#e0b5ff', //lightpurple
  ground: '#ffe0c2', //lightorange
  rock: '#b3a18d', //lightorangegray
  bug: '#9effb1', //lightgreen
  ghost: '#e0e0e0', //lightlightgray
  steel: '#b3bbc9', //lightgrayblue
  fire: '#ffa6a6', //lightred
  water: '#c7edff', //lightblue
  grass: '#c8ffa8', //lightgrassgreen
  electric: '#fffa9c', //lightyellow
  psychic: '#fffd6b', //yellow
  ice: '#e3ffff', //lightlightblue
  dragon: '#c7dbff', //lightgrassgreen
  dark: '#595959', //darkgray
  fairy: '#ffccf8', //lightpink
  shadow: '#919191', //lightgray
  unknown: '#f0f0f0' //white
};
const main_types = Object.keys(card_colors);



const output = document.getElementById('output_card');

var select_gender = [];
var select_color = [];
var select_type = [];
var select_growthRate = [];
var select_pokemons = [];

async function start() {

  for (let index = 1; index <= 4; index++) {
    if (index == 1) {
      do {
        $.getJSON(`https://pokeapi.co/api/v2/gender/${genders}/`, function(data01) {
                //console.log(data01);
                const gender_names = data01.pokemon_species_details.map(pokename => pokename.pokemon_species.name);
                //console.log(gender_names);

                select_gender = gender_names;
                console.log(select_gender);
        })
      } while (select_gender != 0);
    }

    if (index == 2) {
      do {
          $.getJSON(`https://pokeapi.co/api/v2/pokemon-color/${colors}/`, function(data02) {
                //console.log(data02);
                const color_names = data02.pokemon_species.map(pokename => pokename.name);
                //console.log(color_names);

                for (let i = 0; i < color_names.length; i++) {
                  for (let j = 0; j < select_gender.length; j++) {
                    if (color_names[i] == select_gender[j]) {
                      select_color.push(color_names[i]);
                    }
                  }
                }
                console.log(select_color);
          })          
      } while (select_color != 0);
    }

    if (index == 3) {
      do {
          $.getJSON(`https://pokeapi.co/api/v2/type/${types}/`, function(data03) {
                //console.log(data03);
                const type_names = data03.pokemon.map(pokename => pokename.pokemon.name);
                //console.log(type_names);

                for (let i = 0; i < type_names.length; i++) {
                  for (let j = 0; j < select_color.length; j++) {
                    if (type_names[i] == select_color[j]) {
                      select_type.push(type_names[i]);
                    }
                  }
                }
                //console.log(select_type);

                if (select_type.length == 0) {
                  select_type = select_color;
                }

                console.log(select_type);
          })
      } while (select_type != 0);
    }

    if (index == 4) {
      do {
          $.getJSON(`https://pokeapi.co/api/v2/growth-rate/${growthRates}/`, function(data04) {
                //console.log(data04);
                
                const growthRate_names = data04.pokemon_species.map(pokename => pokename.name);
                //console.log(growthRate_names);

                for (let i = 0; i < growthRate_names.length; i++) {
                  for (let j = 0; j < select_type.length; j++) {
                    if (growthRate_names[i] == select_type[j]) {
                      select_growthRate.push(growthRate_names[i]);
                    }
                  }
                }
                //console.log(select_growthRate);

                if (select_growthRate.length == 0) {
                  select_growthRate = select_type;
                }

                console.log(select_growthRate);

                
                if (select_growthRate != 0) {
                  const random = Math.floor(Math.random() * select_growthRate.length);
                  var pokemon = select_growthRate.at(random);
                  console.log(random, pokemon);
                  createPokemonCard(pokemon);
                }
                
          })

      } while (select_growthRate != 0);
    }
  }

  /*
  const pokeInnerHTML = `
        <div id="output_card">
              <h3> ${genders} </h3>
              <h3> ${colors} </h3>
              <h3> ${types} </h3>
              <h3> ${growthRates} </h3>
        </div>
  `;   

  output.innerHTML = pokeInnerHTML;
  $('#output_card').append(output);
  */
};

start();

function createPokemonCard(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const pokemonEl = document.createElement('div');
          pokemonEl.classList.add('pokemon');
          
          const name = data.name[0].toUpperCase() + data.name.slice(1);
          const poke_types = data.types.map(type => type.type.name);
          const type = main_types.find(type => poke_types.indexOf(type) > -1);
          const color = card_colors[type];
  
          pokemonEl.style.backgroundColor = color;
          pokemonEl.style.borderRadius = "20px";


          const pokeInnerHTML = `
          <div id="output_card">
                <br>
                <span class="number">Pokedex: ${data.id}</span>
                <h2 class="name">${name}</h2>
                <img src=${data.sprites.front_default} alt=""/>
                <h3 class="type">Type: <span>${type}</span></h3>
          </div>
        `;

        pokemonEl.innerHTML = pokeInnerHTML;

        output.appendChild(pokemonEl);
      });
};