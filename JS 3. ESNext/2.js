
import {rand} from "./ESNext/rand.js";
import Star from "./ESNext/Star.js";
import Planet from "./ESNext/Planet.js";
import Asteroid from "./ESNext/Asteroid.js";


let stars = [];
for (let i=0;i<10;i++){
    stars.push(new Star(rand(0,100),rand(10,20)));
}
let planets =[];
for (let i=0;i<10;i++){
    planets.push(new Planet(rand(0,100),rand(10,20)));
}
let asteroids=[];
for (let i=0;i<10;i++){
    asteroids.push(new Asteroid(rand(0,100),rand(1,5)));
}

console.log(stars)
console.log(planets)
console.log(asteroids)

const univerese1 =[...stars,...planets,...asteroids];

setInterval(()=>{
    let summarResource=0;
    univerese1.forEach(item=>{
        summarResource +=item.addRes();
    })
    console.log(summarResource);
}, 10000)

