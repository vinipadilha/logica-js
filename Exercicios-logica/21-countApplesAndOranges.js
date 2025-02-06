function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let AppleCount = 0;
    let OrangeCount = 0;

    for (let index = 0; index < apples.length; index++) {
        if( s <= (apples[index] + a) && (apples[index] + a) <= t  ){
            AppleCount++
        }
    }

    for (let index = 0; index < oranges.length; index++) {
        if( s <= (oranges[index] + b) && (oranges[index] + b) <= t  ){
            OrangeCount++
        }
    }

    return [AppleCount, OrangeCount]


}

/*
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
// countApplesAndOranges(s, t, a, b, apples, oranges)


