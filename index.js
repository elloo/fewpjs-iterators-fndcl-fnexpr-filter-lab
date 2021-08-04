// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){
    for (const letter of name ){
      for (const inputLetter of string){
        return (letter === inputLetter ? name : "")
      }
    }
  })
}

function matchName(drivers, string){
  return drivers.filter(object => object.name === string)
}
