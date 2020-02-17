function dwarfRollCall(dwarves) {
  var newDwarves = []
  for (var i = 0; i < dwarves.length; i++) {
  newDwarves += `${i+1}. ${dwarves[i]} `
  }
  return newDwarves
}

function summonCaptainPlanet(planeteerCalls){
  var newPlaneteerCalls = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    // console.log(planeteerCalls[i].toUpperCase())
    newPlaneteerCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  console.log("return",newPlaneteerCalls)
  return newPlaneteerCalls
}

function longPlaneteerCalls(words) {
  var longWords = false
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      longWords = true
    }
  }
  return longWords
}

function findTheCheese (foods) {
  var noCheese
  var cheese = ['cheddar', 'gouda', 'camembert', 'swiss cheese']
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j <cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return foods[i]
      }
    }
      
  }
    return "no cheese!"
}

function wordsWithB(array) {
  var startsWithB = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].startswith(B)){
      startsWithB.push(array[i])
    }
  }
  return startsWithB
}











