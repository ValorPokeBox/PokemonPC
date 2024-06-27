export const getPokemonFromType = async (formObject) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${formObject.type}/`);
        if (!response.ok) {
            throw new Error('Failed to Pokemon from type')
        }
        // console.log(response) //logging the response to see the status
        const jsonData = await response.json() //making the response into json data
        console.log(jsonData)
        // const randomNum = Math.floor(Math.random() * (jsonData.pokemon.length))
        const pokemonOfType = jsonData.pokemon
        console.log(pokemonOfType)
        const pokemonArray = [];
        while (pokemonArray.length < 35) {
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
    document.querySelector('#pokemon').innerHTML = '';
    pokemonUrls.forEach(async (pokemon) => {
        // console.log(pokemon)
        try {
            const response = await fetch(pokemon)
            if (!response.ok) {
                throw new Error('Failed to get pokemon data')
            }
            console.log(response)
            const jsonData = await response.json()
            console.log(jsonData)
            const sprite = jsonData.sprites.front_default
            // console.log(sprite)
            const li = document.createElement('li')
            li.classList.add('pokemon')
            // li.id = jsonData.id;
            const img = document.createElement('img')
            img.src = sprite;
            img.id = jsonData.id
            li.append(img)
            document.querySelector('#pokemon').append(li)

        }
        catch (error) {
            console.warn(error.message)
            return null
        }

    }
    )
}


export const gettingPokemonData = async (pokemonId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        if (!response.ok) {
            throw new Error('Failed to get pokemon data')
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}

export const renderOnePokemon = async (event) => {
    event.preventDefault();

    const pokemon = event.target
    console.log(pokemon)
    const pokemonId = event.target.id;
    console.log(pokemonId)
    console.log('Hi')
    if (pokemon.matches('img')) {
        const pokemonData = await gettingPokemonData(pokemonId)
        document.querySelector('#pokemon-name').textContent = pokemonData.name;
        document.querySelector('#pokemon-height').textContent = `Height: ${pokemonData.height} m`;
        document.querySelector('#pokemon-weight').textContent = `Weight: ${pokemonData.weight} kg`;
        document.querySelector('#pokemon-level').textContent = `Level: ${Math.floor(Math.random() * 100) + 1}`;
        document.querySelector('#pokemon-image').src = pokemonData.sprites.front_default;
        document.querySelector('#pokemon-image').alt = `This is an image of ${pokemonData.name}`
        document.querySelector('.button-box').id = pokemonData.id;

    }
}


export const handleTypeForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject)
    console.log(formObject.type)
    document.querySelector('#box-title').textContent = `Box ${formObject.type}`;
    renderPokemonSprites(await getPokemonFromType(formObject))
    event.target.reset();


}
// const releasePokemon = (event) => {
//     event.preventDefault();
//     if (event.target.matches('.release')) {
//         delete
//     }
// }