//optional parameter -> ? after the variableName
//Optional parameter should be at last value


function comDetails(companyName:string,comPhNo:number,options?:{comGSTNo?:number,}){

    console.log(companyName+" "+comPhNo)

}

comDetails("TestLeaf",4567890)