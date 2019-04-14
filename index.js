var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here


// Add your functions and code here
  
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

 function destructivelyRemoveLastKitten() {
  return kittens.pop()
}


