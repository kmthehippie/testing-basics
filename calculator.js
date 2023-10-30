
function calculator(a,b,operation){
    if(operation === "*"){
        return a*b
    } else if(operation === "+"){
        return a+b
    }   else if(operation === "-"){
        return a-b
    }else if(operation === "/"){
        return a/b
    }else{
        return `Operation ${operation} is not +/*- `
    }

}

module.exports = calculator