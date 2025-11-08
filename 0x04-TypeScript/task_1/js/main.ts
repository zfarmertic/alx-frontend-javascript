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

const director1: Director = {
    firstName: "ochuku",
    lastName: "Uche",
    fullTimeEmployee: false,
    location: "oghara",
    numberOfReports: 46
}

console.log(director1.lastName)