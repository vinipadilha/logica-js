function catAndMouse(x, y, z) {
    let distanceA = Math.Abs(x - z)
    let distanceB = Math.Abs(y - z)

    if(distanceA < distanceB)
        return "Cat A"

}


console.log(catAndMouse(1, 2, 3))
