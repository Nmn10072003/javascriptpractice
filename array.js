let arr = [1,2,3,4,5,6]
arr.unshift(3)
arr.shift()
console.log(arr)

let arr2 = arr.join()
console.log(arr2)

let arr3 = arr.slice(1,3)
console.log(arr3)

let arr4 = arr.splice(1,3)
console.log(arr4)
console.log(arr)
