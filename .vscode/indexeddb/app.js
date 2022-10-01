import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs'

const db = new Dexie('pokemonDB');

db.version(1).stores({
    pokemon: "++id,name",
});

db.on("populate", async () => {
    await db.pokemon.bulkPut([
        { 
            name: "Bulbasaur", 
            picture: 
                "" 
        },
        { 
            name: "Charmander", 
            picture: 
                "" 
        },
        { 
            name: "Squirtle", 
            picture: 
                "" 
        },
        { 
            name: "Pikachu", 
            picture: 
                "" 
        },           
    ]);
});

db.open();


const pokemoh = await db.pokemon.toArray();
console.log(pokemon);