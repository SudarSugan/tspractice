function add(n1:number,n2:number):string
{
    return n1.toString() + n2.toString(); // error because we said it as a string but we said above has a number that's it says error
}
function printresult(num:string):void{
    console.log('result'+ num);
}
function addAndHandle(n1:number,n2:number, cb:(num:number)=>void){
    const result= n1+n2;
    cb(result);
}
printresult (add(5,12));
let combinevalues:(a:number,b:number)=>string;

combinevalues = add;
//combinevalues=printresult;
//combinevalues=5;// it will says that it was not a function
console.log(combinevalues(8,8));
addAndHandle(10,20,(result)=>{
    console.log(result);
});