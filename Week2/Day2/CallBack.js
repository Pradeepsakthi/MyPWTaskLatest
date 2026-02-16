function orderFood(callback){
    console.log("food is order")

    //preparing time
    setTimeout(()=>{
    preparingFood(callback)
},5000)

}

function preparingFood(callback){
    console.log("Coking team Preparing the food")
    callback()
}

function pickUp(){
    console.log("Pickup food")
}

//call the last function
orderFood(pickUp)