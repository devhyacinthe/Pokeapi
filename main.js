

const getAllPokemons = async () => {
    //for search all pokemons on api
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach(element => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
                    .then((res) => res.json())
                    .then((data) => {

                    if(data.types[0].type.name == "grass"){

                            let pokemon = document.createElement('div')
                            pokemon.classList.add('pokemonGrass')
    
                            let id = document.createElement('p')
                            id.classList.add('id')
                            id.innerHTML = data.id
                            pokemon.appendChild(id)
    
                            let nom = document.createElement('p')
                            nom.classList.add('name')
                            nom.innerHTML = data.forms[0].name
                            pokemon.appendChild(nom)
                            
                            let image = document.createElement('img')
                            image.classList.add('image')
                            image.src = data.sprites.back_default
                            pokemon.appendChild(image)
    
                            let type = document.createElement('p')
                            type.classList.add('type')
                            type.innerHTML = data.types[0].type.name
                            pokemon.appendChild(type)
    
                            let taille = document.createElement('p')
                            taille.classList.add('taille')
                            taille.innerHTML = data.height
                            pokemon.appendChild(taille)
    
                            let poids = document.createElement('p')
                            poids.classList.add('poids')
                            poids.innerHTML = data.weight
                            pokemon.appendChild(poids)

                            document.body.appendChild(pokemon)

                    }

                    else if (data.types[0].type.name == "fire"){

                        let pokemon = document.createElement('div')
                        pokemon.classList.add('pokemonFire')

                        let id = document.createElement('p')
                        id.classList.add('id')
                        id.innerHTML = data.id
                        pokemon.appendChild(id)

                        let nom = document.createElement('p')
                        nom.classList.add('name')
                        nom.innerHTML = data.forms[0].name
                        pokemon.appendChild(nom)
                        
                        let image = document.createElement('img')
                        image.classList.add('image')
                        image.src = data.sprites.back_default
                        pokemon.appendChild(image)

                        let type = document.createElement('p')
                        type.classList.add('type')
                        type.innerHTML = data.types[0].type.name
                        pokemon.appendChild(type)

                        let taille = document.createElement('p')
                        taille.classList.add('taille')
                        taille.innerHTML = data.height
                        pokemon.appendChild(taille)

                        let poids = document.createElement('p')
                        poids.classList.add('poids')
                        poids.innerHTML = data.weight
                        pokemon.appendChild(poids)

                        document.body.appendChild(pokemon)

                    }
                       
                    else if (data.types[0].type.name == "normal"){

                        let pokemon = document.createElement('div')
                        pokemon.classList.add('pokemon')

                        let id = document.createElement('p')
                        id.classList.add('id')
                        id.innerHTML = data.id
                        pokemon.appendChild(id)

                        let nom = document.createElement('p')
                        nom.classList.add('name')
                        nom.innerHTML = data.forms[0].name
                        pokemon.appendChild(nom)
                        
                        let image = document.createElement('img')
                        image.classList.add('image')
                        image.src = data.sprites.back_default
                        pokemon.appendChild(image)

                        let type = document.createElement('p')
                        type.classList.add('type')
                        type.innerHTML = data.types[0].type.name
                        pokemon.appendChild(type)

                        let taille = document.createElement('p')
                        taille.classList.add('taille')
                        taille.innerHTML = data.height
                        pokemon.appendChild(taille)

                        let poids = document.createElement('p')
                        poids.classList.add('poids')
                        poids.innerHTML = data.weight
                        pokemon.appendChild(poids)

                        document.body.appendChild(pokemon)

                    }

                    else if (data.types[0].type.name == "water"){

                        let pokemon = document.createElement('div')
                        pokemon.classList.add('pokemonWater')

                        let id = document.createElement('p')
                        id.classList.add('id')
                        id.innerHTML = data.id
                        pokemon.appendChild(id)

                        let nom = document.createElement('p')
                        nom.classList.add('name')
                        nom.innerHTML = data.forms[0].name
                        pokemon.appendChild(nom)
                        
                        let image = document.createElement('img')
                        image.classList.add('image')
                        image.src = data.sprites.back_default
                        pokemon.appendChild(image)

                        let type = document.createElement('p')
                        type.classList.add('type')
                        type.innerHTML = data.types[0].type.name
                        pokemon.appendChild(type)

                        let taille = document.createElement('p')
                        taille.classList.add('taille')
                        taille.innerHTML = data.height
                        pokemon.appendChild(taille)

                        let poids = document.createElement('p')
                        poids.classList.add('poids')
                        poids.innerHTML = data.weight
                        pokemon.appendChild(poids)

                        document.body.appendChild(pokemon)

                    }
                       
                    else if (data.types[0].type.name == "bug"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonBug')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                       
                    else if (data.types[0].type.name == "ground"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonGround')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "electric"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonElectric')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "fighting"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonFighting')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "psychic"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonPsychic')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "rock"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonRock')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "poison"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonPoison')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "ghost"){
                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonGhost')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "ice"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonIce')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "dragon"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonDragon')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "fairy"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonFairy')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    
                    }
                    
                    else if (data.types[0].type.name == "steel"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonSteel')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }
                    
                    else if (data.types[0].type.name == "dark"){

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemonDark')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    
                    }
                    
                    else{

                       let pokemon = document.createElement('div')
                       pokemon.classList.add('pokemon')

                       let id = document.createElement('p')
                       id.classList.add('id')
                       id.innerHTML = data.id
                       pokemon.appendChild(id)

                       let nom = document.createElement('p')
                       nom.classList.add('name')
                       nom.innerHTML = data.forms[0].name
                       pokemon.appendChild(nom)
                       
                       let image = document.createElement('img')
                       image.classList.add('image')
                       image.src = data.sprites.back_default
                       pokemon.appendChild(image)

                       let type = document.createElement('p')
                       type.classList.add('type')
                       type.innerHTML = data.types[0].type.name
                       pokemon.appendChild(type)

                       let taille = document.createElement('p')
                       taille.classList.add('taille')
                       taille.innerHTML = data.height
                       pokemon.appendChild(taille)

                       let poids = document.createElement('p')
                       poids.classList.add('poids')
                       poids.innerHTML = data.weight
                       pokemon.appendChild(poids)

                       document.body.appendChild(pokemon)

                    }


                       console.log(data);
                    })
                });
            })
   
    
    
   
}
getAllPokemons()

