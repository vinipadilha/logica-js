function timeConversion(s){

    s.split('');

    let hours = parseInt(s[0] + s[1]);
    let minutes = s[3] + s[4];
    let seconds = s[6] + s[7];
    let ampm = s[s.lenght - 2]
}


console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("07:05:45AM"))
console.log(timeConversion("12:05:39AM"))
console.log(timeConversion("06:40:03AM"))

