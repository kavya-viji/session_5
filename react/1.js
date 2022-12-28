//----normal function----
// function main()
// {
// 	console.log("regular function");
// return "js";
// }
// main()
main = () =>"js";
main()
//----arrow function----
// main = () =>
// {
// 	console.log("arrow function");
// }
// main()

// main = (...a) => { //rest operator 
// console.log(a);
// }
// main(1)

// var obj = 
// {
//     name:"kavya",
//     normalFunction:function()
//     {
//         console.log(this.name);  
//     },
//     arrowFunction:() =>
//     {
//         console.log(this.name);  
//     },
// };
//obj.normalFunction();  //o/p kavya
//obj.arrowFunction();   //o/p  undefined

//---------------import/export--------------

export const name = "kavya"

export const getName = () => name;

export default () =>{
    return name;
};