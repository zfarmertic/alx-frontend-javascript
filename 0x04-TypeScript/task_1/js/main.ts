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


interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

function printTeacher ({firstName, lastName}: {firstName: string; lastName:string}): string{
     return `${firstName}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))


interface StudentClassId {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface IStudentConstructor {
    new (firstName: string, lastName: string): StudentClassId;
}

class StudentClass implements StudentClassId{
    constructor(public firstName: string, public lastName: string){
            
    }
    workOnHomework () : string{
        return("Currently working")
        
    }
    displayName() : string{
        return this.firstName
    }
}

