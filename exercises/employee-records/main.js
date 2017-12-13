var employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
}

Employee.prototype.printEmployeeForm = function() {
    console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status);
}

// Call the printEmployeeForm method for each employee
// Put the generated employees into the employees array using whichever method you prefer.

var emp1 = new Employee('Sandra', 'nanny', '$20/hr');
emp1.status = 'Part Time';
emp1.printEmployeeForm();

var emp2 = new Employee('Ben', 'V School Instructor', '$50,000');
emp2.printEmployeeForm();

var emp3 = new Employee('Mike', 'Writer', '$100,000');
emp3.printEmployeeForm();

employees.push(emp1, emp2, emp3);
console.log(employees);


