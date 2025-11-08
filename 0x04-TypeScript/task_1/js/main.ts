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

function printTeacher (firstName, lastName){
     return `${firstName.charAt(0)}. ${lastName}`
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

// Task 5 --- Advanced Types Part 1
interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}

class Director implements DirectorInterface{
     workFromHome(){
        return " Working from home"
     };
    getCoffeeBreak(){
        return "Getting a coffee break"
    }
    workDirectorTasks(){
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
     workFromHome(){
        return "Cannot work from home"
     };
    getCoffeeBreak(){
        return "Cannot have a break"
    }
    workDirectorTasks(){
        return "Getting to work"
    }
}