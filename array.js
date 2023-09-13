// let arr = [1,2,3,4,5,6]
// arr.unshift(3)
// arr.shift()
// console.log(arr)

// let arr2 = arr.join()
// console.log(arr2)

// let arr3 = arr.slice(1,3)
// console.log(arr3)

// let arr4 = arr.splice(1,3)
// console.log(arr4)
// console.log(arr)

let myarr = [1,2,334,4,56,[2334,343,[34,56]]]
let myarr1 = [12,234,334,4,56,[2334,343,[34,56]]]
let myarr2=[...myarr, ...myarr1]
console.log(myarr)
console.log(myarr2)

console.log(myarr1.flat(Infinity))

console.log(Array.from("hitest"))