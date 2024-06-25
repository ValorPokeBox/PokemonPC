import './style.css'
import { getPokemonFromType } from './fetch-functions'
import { renderPokemonSprites } from './fetch-functions'

getPokemonFromType('https://pokeapi.co/api/v2/type/18').then((pokemonUrls) => renderPokemonSprites(pokemonUrls))
