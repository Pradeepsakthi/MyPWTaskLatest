let comName='TestLeaf@2026 '
console.log("Total length of chars: "+comName.length)
//start-> index value 0 

//print value based oan the index -> charAt()
console.log("Print char present in index of 7 :"+comName.charAt(7))

//convert lowercase and uppercase
console.log("Uppercase :"+comName.toUpperCase())
console.log("lowercase :"+comName.toLowerCase())

//split()
let value="Amazon Big Millions Sales"
let splitValue=value.split(" ")
console.log(splitValue)
for(let i=0;i<splitValue.length;i++){
    console.log(splitValue[i])
}

//concat() '+'
let a=`Test`
let b='Leaf'
console.log(a.concat(b))

let price="3400"
let num=parseInt(price)
console.log(num + typeof(num))

//substring & slice
//substring -> print the value based on the index from 1
//1 to 7 -> starting and ending (ending -1) -> 1 to 6
//substring -> +ve
let value1="SubString"
console.log("Starting index :"+value1.substring(1))
console.log("Starting and ending Index :"+value1.substring(1,7))

//slice -> both +ve  and -ve 
let s="playwright"
console.log(s.slice(-4,-2))
//10-1=>9(9,5)
//10-5=> 5(6,8-1)=>(6,7)

//replace
let val="Data"
console.log(val.replace("a","A"))
console.log(val.replaceAll('a',"A"))

let val1="amazon sales 2026"
let replace=val1.replaceAll(/[a-z]/g,"1")
console.log(replace)