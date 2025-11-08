// Task 5 --- Advanced Types Part 1
interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
     workFromHome(): string{
        return " Working from home"
     };
    getCoffeeBreak(): string{
        return "Getting a coffee break"
    }
    workDirectorTasks(): string{
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
     workFromHome(): string{
        return "Cannot work from home"
     };
    getCoffeeBreak(): string{
        return "Cannot have a break"
    }
    workTeacherTasks(): string{
        return "Getting to work"
    }
}

//Task 6 --- Creating Function Specifi to employees

interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

function workDirectorTasks(): string {
  return "Getting to director tasks";
}

function workTeacherTasks(): string {
  return "Getting to work";
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
const director: Director = { workDirectorTasks };
const teacher: Teacher = { workTeacherTasks };

console.log(executeWork(director)); // Getting to director tasks
console.log(executeWork(teacher));  // Getting to work
