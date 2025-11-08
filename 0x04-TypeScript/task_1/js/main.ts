interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string] : any
}


interface Director extends Teacher{
    numberOfReports: number
}


//Task 3 --- Printing Teachers

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return "`${firstName.charAt(0)}. ${lastName}`";
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // "J. Doe"



//Task 4 --- Writing Class

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface IStudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface{
    constructor(public firstName: string, public lastName: string){}
    workOnHomework():string{
        return "Currently working"
        
    }
    displayName():string{
        return this.firstName
    }
}

