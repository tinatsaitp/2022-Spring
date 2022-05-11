const container10 = document.getElementById('container10');
const pokemon_humanlike = document.getElementById('pokemon_humanlike');
pokemon_humanlike.addEventListener('click', groupPokemons10);

let num10 = 0;

function clearContainer10() {
      document.getElementById('container10').innerHTML = "";
      num10 = 0;
};

function groupPokemons10() {
    if (num10 != 0)
    {
      clearContainer10();
    }

    fetch(`https://pokeapi.co/api/v2/egg-group/8/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const poke_name = data.pokemon_species.map(pokename => pokename.name);

          for (let i = 0; i < 3; i++) {
              const random = Math.floor(Math.random() * poke_name.length);
              let poke = poke_name.at(random)
              console.log(random, poke)
              $('#container10').append(createPokemonCard10(poke))
          }
      });

      num10++;
};


function createPokemonCard10(pokemon) {

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

        container10.appendChild(pokemonEl);
      });
};