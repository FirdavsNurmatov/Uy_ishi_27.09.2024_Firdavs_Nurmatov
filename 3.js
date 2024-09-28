function countAll(str) {
    let obj = {}
    let countNumbers = 0
    let countLetters = 0
    for(let i of str){
        if(i != ' ' && i == Number(i)){
            countNumbers++
        }else if(i != ' '){
            countLetters++
        }
    }
    obj.HARFLAR = countLetters
    obj.RAQAMLAR = countNumbers
    return obj
}

console.log(countAll("Hello World"))
console.log(countAll("H3ll0 Wor1d"))
console.log(countAll("149990"))