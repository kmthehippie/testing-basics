function caesarCipher(str){
   let temp = [...str]
   let newTemp = "";
   for(let i=0; i<temp.length; i++){
    let charCode = str.charCodeAt(i) 
    if(charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123){           
        if (charCode === 90 ){
            newTemp+=String.fromCharCode(65)
        }else if (charCode === 122){
            newTemp+=String.fromCharCode(97)
        }else {
            newTemp+=String.fromCharCode(charCode+1)
        }
    } else {
        newTemp += temp[i]        
    }
    }
    return newTemp
}

// const findIndex = function(alphabet){
   
//     console.log(normalCapsAlphabets.findIndex(alphabet))
//     console.log(normalCapsAlphabets, normalAlphabets, alphabet)
// }

module.exports = caesarCipher;