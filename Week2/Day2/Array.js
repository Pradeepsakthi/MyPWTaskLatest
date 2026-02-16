let data=[23,56,45,12,45,26,78,4, ,true]
data.sort()
//data.reverse()
console.log(data)

for(let i=0;i<data.length;i++){
    console.log(data[i])
}

//for..of -> no need give i=0;i<data;i++
//assign old value variable to new variable
for(let d of data){
console.log(d)
}


//nested for loop
for(let i=0;i<data.length;i++){
//23,56,45
    for(let j=i+1;j<data.length;j++){
//56,45,12,45,26,78
//45,12,45,26,78
//12,45
        if(data[i]==data[j]){
            //45==45
            console.log("Duplicate number :"+data[j])
        }

    }

}

let dd=[23,'dk',56,true]
//splice -> replace old value to new value based on index
dd.splice(2,2,45,'dilip')
console.log(dd)