const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let input = document.querySelector('input');

let button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log(input.value);
    let filteredStreamers = streamers.filter((streamer)=> {
        return streamer.name.includes(input.value)
        });
    
    console.log(filteredStreamers);
});

