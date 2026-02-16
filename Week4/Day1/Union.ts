//Union means -> OR condition => |
//let empDetails:number|string|boolean

let empDetails:string|number|boolean
empDetails=89
empDetails="sakthi"
empDetails="pradhip"
console.log(empDetails)

//intersection ->&
//let Apistatus:number&string

//type alies -> create custom name of the type
type api1={
statuscode1:number
}

type api2={
    statuscode2:string
}

type sta=api1&api2

let Apistatus:sta={
    statuscode2:'ok',
    statuscode1:89
}
console.log(Apistatus)