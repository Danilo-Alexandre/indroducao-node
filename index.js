let allPokemon = require("./Pokemon")

let battle = () =>{
for(i=0 ; i < allPokemon.length ; i++){
    for(x=0; x<allPokemon.length; x++){

        i != x ? allPokemon[i].ataque(allPokemon[x]) : null
    }
}
   
}


battle()