const pokemondetail = document.getElementById('pokemonDetail');
const idPoke = window.location.search.substring(4)
const pokeDetailApi = {}
console.log(idPoke);

function convertDetailToLi(pokemon){
    
    
    return `
    <li class="pokemon ${pokemon.types[0].type.name}" id=${pokemon.id} onclick="pokeMoreDetail(${pokemon.id})">
        <span class="name">${pokemon.name}</span>    
        <span class="number">#${pokemon.id}</span>
        <div class="detail">
            
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
        
    </li> 
        <li class="pokemon">
    
            <span class="info">Height: ${pokemon.height}</span> 
            <span class="info">Weight: ${pokemon.weight}</span> 
            <span class="info">Base Experience: ${pokemon.base_experience}</span> 
            <span class="info">Main Ability: ${pokemon.abilities[0].ability.name}</span> 
             
        </li>
        <div class="base_stats">
        <li class="pokemon">
            
            <h3 class="status">STATUS BASE</h3>
            <span class="status hp">HP: ${pokemon.stats[0].base_stat}</span> 
            <span class="status att">ATTACK: ${pokemon.stats[1].base_stat}</span> 
            <span class="status def">DEFENSE: ${pokemon.stats[2].base_stat}</span> 
            <span class="status satt">SPECIAL ATK: ${pokemon.stats[3].base_stat}</span> 
            <span class="status sdef">SPECIAL DEF: ${pokemon.stats[4].base_stat}</span> 
            <span class="status speed">SPEED: ${pokemon.stats[5].base_stat}</span> 
        </li>
        </div>
    `
}


pokeDetailApi.getDetail = (id=1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => //console.log(pokemon)
        {
            const newDetailHtml = convertDetailToLi(pokemon)
            pokemondetail.innerHTML += newDetailHtml
        }
        )
        // .then((jsonBody) => jsonBody.results)
        // .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        // .then((detailRequests) => Promise.all(detailRequests))
        // .then((pokemonsDetails) => pokemonsDetails)
    
}


pokeDetailApi.getDetail(idPoke)