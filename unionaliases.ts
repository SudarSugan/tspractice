type son =number| string; /**we can use son instread of number and string it is declare by the user */
type sun = 'as-a-number'|'as-a-Text';
function combine(num1:son /**number|string */, num2:number |string, convert:sun) 
{
    let resutl1;
  if (typeof num1==="number" && num2 === "number"|| convert==="as-a-Text"){
     resutl1 = +num1 + +num2;
  }else
  {
      resutl1= num1.toString()+num2.toString(); 
  }    
        return resutl1;
   
}
const comb= combine(30,65,"as-a-number");
console.log (comb); // for this we declare it number that we mentained in above

const comb1=combine ("siva", "wiki","as-a-number"); // but here we declare the string instread of number so for that we have to use pipe for declared the variable.
console.log(comb1);
const comb2 =combine('20','4543',"as-a-number");
console.log(comb2);