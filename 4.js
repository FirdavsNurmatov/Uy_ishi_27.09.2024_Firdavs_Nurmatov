function checkout(arr) {
    let sumAll = 0
    for(let obj of arr){
        let {_, prc, qty, taxable} = obj
        if(taxable){
            let soliq = prc + prc / 100 * 6
            sumAll+=soliq*qty
            continue
        }
        sumAll+=prc*qty
    }
    console.log(sumAll)
}

checkout([
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
])