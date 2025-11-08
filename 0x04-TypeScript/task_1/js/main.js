function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return ("Currently working");
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
