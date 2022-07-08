
let typePokemons = []
let idPokemons = []
let imagePokemons = []
let taillePokemons = []
let poidsPokemons = []

const getAllPokemons = async () => {
    //for search all pokemons on api
    await fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach(element => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
                    .then((res) => res.json())
                    .then((data) => {
                       typePokemons.push(data.types[0].type.name)
                       idPokemons.push(data.id)
                       imagePokemons.push(data.sprites.back_default)
                       taillePokemons.push(data.height)
                       poidsPokemons.push(data.weight)
                       console.log(data);
                    })
                });
            })
            
    console.log(typePokemons);
    console.log(idPokemons);
    console.log(imagePokemons);
    console.log(taillePokemons);
    console.log(poidsPokemons);
    
   
}
getAllPokemons()

