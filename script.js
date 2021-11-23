document.body.innerHTML=`<div class="Body"><div class="mainlogo"><img  alt="PokemonLogo" title="Pokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"></div>
<section class="list"></section> </div>
`; 
async function pokemon()
{
   let data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
   let users=await data.json();

   let usercontainer=document.querySelector(".list"); 
   usercontainer.innerHTML="";
  console.log(users.results.length);

  

users.results.forEach((use,i) =>
  {
     
     async function pokedat()
 {
     var pokemondata= await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}/`);
     var getpokemondata =await pokemondata.json();
     var pokemonabilities=getpokemondata.abilities;       
     var pokemonmove=getpokemondata.moves
     // console.log();
     // Pokemon Ability
     let poke='';
     pokemonabilities.forEach((abilities)=>
     {
       
       poke+=abilities.ability.name+" ";
     
     });
     let pokemonability=poke.trim('').split(' ').join(',');

     // Pokemon Moves
     let pokmove=""
     pokemonmove.forEach(data=>
     {
     pokmove+=data.move.name+" ";
     });
    //  console.log (pokmove.trim('').split(' ').join(','));
       


let frontimg=getpokemondata.sprites.front_default;
let backimg=getpokemondata.sprites.back_default;
// console.log(frimg);







     usercontainer.innerHTML+=`<div class="pokemondata">
     <div class="pokimg">
     <img class="front" src="${frontimg}" alt="${use.name}" title="${use.name}"> 
    
       <h1 id="name">${use.name}</h1>   
       </div>
     <div class="pokcontent">
     <ul>
     <li>Height:${getpokemondata.height}m</li>
     <li>Weight:${getpokemondata.weight}kg</li>
     <li>Abilities:${pokemonability}</li>
    <li>Best Move:${getpokemondata.moves[0].move.name}</li>
    </ul>
    </div>
    </div>`; 
  }

   pokedat();

 
});



//  console.log(getpokemondata.weight);








}
pokemon();





