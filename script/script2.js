alert("YA FUNCIONA BUSCA TU POKEMON");

// Clases
class Pokemon {
    constructor(name, image, move1, move2, move3, move4) {
        this.name = name;
        this.image = image;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
    }
}

// Arrow functions
let search = () => {
    let pokeInput = document.getElementById("pokeInput").value;
    console.log(pokeInput);
    // Acceder a endpoint
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokeInput)
        .then((data) => {
            // console.log(data.status);
            // 200 OK
            // 404 Not Found
            if (data.status === 200) {
                success();
                // JavaScript Object Notation
                data.json()
                    .then((pokeInfo) => {
                        // console.log(pokeInfo);
                        let pokemon = new Pokemon(
                            pokeInfo.name,
                            pokeInfo.sprites.front_default,
                            pokeInfo.moves[0].move.name,
                            pokeInfo.moves[1].move.name,
                            pokeInfo.moves[2].move.name,
                            pokeInfo.moves[3].move.name);
                        console.log(pokemon);
                        document.getElementById("pokeImage").src = pokemon.image;
                        document.getElementById("pokeName").innerHTML = pokemon.name;
                        document.getElementById("pokeMove1").innerHTML = pokemon.move1;
                        document.getElementById("pokeMove2").innerHTML = pokemon.move2;
                        document.getElementById("pokeMove3").innerHTML = pokemon.move3;
                        document.getElementById("pokeMove4").innerHTML = pokemon.move4;
                    })
                    .catch(() => {
                        error();
                    })
            } else {
                error();
            }
        })
        // Servidor no respondió
        .catch(() => {
            error();
        })
}



function success() {
    Swal.fire(
        'Se encontro el pokemon',
        '',
        'success'
    )

}

function error() {
    Swal.fire(
        'Error',
        '',
        'Error'
    )

}




function onEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

