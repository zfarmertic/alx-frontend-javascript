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

function printTeacher(firstName : string, lastName: string) : string{
   
    const first = firstName.charAt(0) + ".";

    return (`${first} ${lastName}`)
}

console.log(printTeacher("Merit", "Onogbotsere"))