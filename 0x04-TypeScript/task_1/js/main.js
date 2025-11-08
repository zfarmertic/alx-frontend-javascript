// const printTeacher: printTeacherFunction = (firstName, lastName) =>{
//     const first = firstName.charAt(0) + ".";
//     return (`${first} ${lastName}`)
// }
function printTeacher(firstName, lastName) {
    var first = firstName.charAt(0) + ".";
    return ("".concat(first, " ").concat(lastName));
}
console.log(printTeacher("Merit", "Onogbotsere"));
