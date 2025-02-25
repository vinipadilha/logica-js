function timeConversion(s) {
    // Write your code here
    let hr = s.slice(0, 2)
    let newhr = s.slice(2, -2)

    if(hr >= 12){
        hr = hr - 12
    }
    return console.log(hr + newhr + "PM")



}

console.log(timeConversion("12:00:00AM"))
console.log(timeConversion("07:05:45PM"))

function timeConversion
