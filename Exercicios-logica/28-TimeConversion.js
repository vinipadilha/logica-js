
function timeConversion(s){

    let format = s.slice(-2)
    let hr = Number(s.slice(0, 2))
    let newhr = s.slice(2, -2)

    if(format == "PM"){
        hr = hr + 12
        return hr + newhr

    } else{
        return s.slice(0, -2)
    }
}
console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("07:05:45AM"))

