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
        let pokemonUrls = pokemonArray.map((pokemonObj) => pokemonObj.pokemon.url)
        console.log(pokemonUrls)
        return pokemonUrls
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}

export const renderPokemonSprites = (pokemonUrls) => {

    pokemonUrls.forEach(async (pokemon) => {
        console.log(pokemon)
        try {
            const response = await fetch(pokemon)
            if (!response.ok) {
                throw new Error('Failed to get pokemon data')
            }
            // console.log(response)
            const jsonData = await response.json()
            console.log(jsonData)
            const sprite = jsonData.sprites.front_default
            console.log(sprite)
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.src = sprite;
            li.append(img)
            document.querySelector('#pokebox').append(li)

        }
        catch (error) {
            console.warn(error.message)
            return null
        }

    }
    )
}


// const gettingPokemonData =