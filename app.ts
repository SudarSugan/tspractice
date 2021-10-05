let userInput: unknown;
let userName : string;

userInput=5;
userName="max";

if (typeof userInput=="string"){
userName=userInput;} // instread of useing any if use the unknow u have to declare the if condition then only it will clear the error in the line if u remove if condition u can c the error what it is.

// for the Username error we have to declar in the any data type means u can give any data into it

// let userInput: any;
// let userName : string;

// userInput=5;
// userName="max";
// useName=userInput;

function generateError(message:string, code:number):never{ // instread using void we can use (never)
    throw {message:message, errorCode:code};
}
generateError("an error occured", 500);// it help to show the error to the user what happend.
