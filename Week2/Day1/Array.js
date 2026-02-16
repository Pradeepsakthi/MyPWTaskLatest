let arr=[87,'Dilip',true, ,null,78]
//length of array
console.log(arr.length)
//print  value based on index 
//index value start from '0'
console.log(arr[2])

//push,pop,shift,unshift,sort
//push ,pop -> add and remove at last index 

//push -> add value at end of the array
arr.push('js')
console.log(arr)
//pop-> remove the value from last index
arr.pop()
console.log(arr)

//shift and unshift -> add and remove in inital value array 'first'

//shift()-> remove the value from first
arr.shift()
console.log(arr)

//unshift -> add the new value in first
arr.unshift(false)
console.log(arr)