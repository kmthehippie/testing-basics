
function capitalize(str){
    let words = ""
    let rest = "";
    let numbers ="";
    //gets rid of numbers
    for(let i = 0; i < str.length; i++){
        if((str[i]>="a" && str[i]<="z") || (str[i]>="A" && str[i]<="Z")){
            words += str[i]
        } else if(!(str[i]>="a" && str[i]<="z") && !(str[i]>="A" && str[i]<="Z")){
            numbers += str[i]
        }
    }
    
    rest = words.charAt(0).toUpperCase() + words.slice(1)
    return numbers +rest
}

module.exports = capitalize;