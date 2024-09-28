function numInStr(arr) {
    let arr2 = []
    for(let i of arr){
        let cnt = 0
        for(let j of i){
            if(j != ' ' && j == Number(j)){
                cnt++
            }
        }
        if(cnt){
            arr2.push(i)
        }
    }
    return arr2
}

console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr(["this is a test", "test1"]))