let spaceship = {
  'Fuel Type' : 'Avocado Oil',
  'Active Mission' : true,
  homePlanet : 'Earth' ,
  numCrew : 5 
};

let access = (objName, propName) => {
  return objName[propName];
} 

// console.log(spaceship.homePlanet);
let spaceshipHome = access(spaceship,'homePlanet');
console.log(spaceshipHome);