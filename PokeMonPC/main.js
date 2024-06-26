import './style.css'
import { getPokemonFromType } from './fetch-functions'
import { renderPokemonSprites } from './fetch-functions'
import { gettingPokemonData } from './fetch-functions'
import { renderOnePokemon } from './fetch-functions'
import { handleTypeForm } from './fetch-functions'


const main = () => {
    document.querySelector('#type-selector').addEventListener('submit', handleTypeForm)
    document.querySelector('#pokemon').addEventListener('click', renderOnePokemon)
}
main()
// getPokemonFromType('https://pokeapi.co/api/v2/type/18').then((pokemonUrls) => renderPokemonSprites(pokemonUrls))


