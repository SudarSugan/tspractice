/** Checks the inputs are correct or not */

/** DATA TYPES LIKES STRING , NUMBER, AND BOOLEAN */

function add(num1 : number, num2:number , bool: boolean, resultPhare:string){
    // if (typeof  num1 !=="number" ||typeof num2 !== "number" )
    // {
    //     throw new Error("invalide input");
        
    // }
    let resutl1 =num1+ num2
    if (bool){
        console.log(resultPhare+resutl1 );
    }
    else{
    return resutl1;
}
}
const num1 = 3;
const num2 = 14.989;
const bool = true;
const resultPhare= " the final Result is "
 add(num1,num2,bool, resultPhare);