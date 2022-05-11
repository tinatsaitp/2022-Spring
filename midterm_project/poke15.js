const container15 = document.getElementById('container15');
const pokemon_others = document.getElementById('pokemon_others');
pokemon_others.addEventListener('click', groupPokemons15);

let num15 = 0;

function clearContainer15() {
      document.getElementById('container15').innerHTML = "";
      num15 = 0;
};

function groupPokemons15() {
    if (num15 != 0)
    {
      clearContainer15();
    }

    fetch(`https://pokeapi.co/api/v2/egg-group/15/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const poke_name = data.pokemon_species.map(pokename => pokename.name);

          for (let i = 0; i < 3; i++) {
              const random = Math.floor(Math.random() * poke_name.length);
              let poke = poke_name.at(random)
              console.log(random, poke)
              $('#container15').append(createPokemonCard15(poke))
          }
      });

      num15++;
};


function createPokemonCard15(pokemon) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const pokemonEl = document.createElement('div');
          pokemonEl.classList.add('pokemon');
          
          const name = data.name[0].toUpperCase() + data.name.slice(1);
          const poke_types = data.types.map(type => type.type.name);
          const type = main_types.find(type => poke_types.indexOf(type) > -1);
          const color = colors[type];
  
          pokemonEl.style.backgroundColor = color;
          pokemonEl.style.borderRadius = "20px";


          const pokeInnerHTML = `
          <div class="box-container">
                <span class="number">Pokedex: ${data.id}</span>
                <h2 class="name">${name}</h2>
                <img src=${data.sprites.front_default} alt=""/>
                <h3 class="type">Type: <span>${type}</span></h3>
          </div>
        `;
        
        pokemonEl.innerHTML = pokeInnerHTML;

        container15.appendChild(pokemonEl);  
      });
};