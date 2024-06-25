export const getPokemonFromType = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to Pokemon from type')
        }
        console.log(response) //logging the response to see the status
        const jsonData = await response.json() //making the response into json data
        console.log(jsonData)
        // const randomNum = Math.floor(Math.random() * (jsonData.pokemon.length))
        const pokemonOfType = jsonData.pokemon
        console.log(pokemonOfType)
        const pokemonArray = [];
        while (pokemonArray.length < 10) {
            pokemonArray.push(pokemonOfType[Math.floor(Math.random() * (pokemonOfType.length))])
        }
        console.log(pokemonArray)
        return pokemonArray
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}