function catAndMouse(x, y, z) {
    let distanceA = Math.abs(x - z)
    let distanceB = Math.abs(y - z)

    if(distanceA < distanceB){
        return "Cat A"

    } else if (distanceA > distanceB){
        return "Cat B"
    
    } else {
        return "Mouse C"
    }


}


console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))
