

const getAllPokemons = async () => {

    //for search all pokemons on api
    await fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach(element => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data.name);
                    })
                });
            })

    //for see details of all pokemons
   
}
getAllPokemons()  