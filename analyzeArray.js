function analyzeArray(arr){
    for(let i = 0; i < arr.length; i ++){
        if (typeof arr[i] !== 'number'){
            return "Item in array is Not a Number"
        } 
    }
        let length = arr.length
        let total = 0;
        arr.forEach(num=>{
            return total+= num
        })
        let ave = Math.floor(total/length)
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        let object = new Object(ave,min,max,length)
        return object
 
}

function Object(a,b,c,d){
    return{
        average:a,
        min:b,
        max:c,
        length:d
    }
}

module.exports = analyzeArray;