function printNumbers(n)
{
    let newArr = [];
    for (let i =1; i<=n; i++){
        newArr.push(i);
    }
    return newArr;
}

let n=10;
let arr = printNumbers(n);
console.log(arr)
