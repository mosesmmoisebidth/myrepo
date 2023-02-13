function multiply(firstArr){
    return (sigleNumber) => {
        let newArray = [];
        for(let i of firstArr){
            newArray.push(i * sigleNumber)
        }
        return newArray
    }
}
console.log(multiply([1,2,3,4,5,6]));