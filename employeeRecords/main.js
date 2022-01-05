var employees = []
console.log(employees)
var printEmployeeForm = printEmployeeForm

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "full time"
    this.printEmployeeForm = employees.push(Employee)
    console.log()
      
}

var Zara = new Employee ("Zara", "Teacher", "30/hour", "full time")
console.log(Zara)

var Eriyah = new Employee("Eriyah", "Cheif", "70", "full time")
console.log(Eriyah.status)

var Jackie = new Employee("Jackie", "Driver", "25", "full time")
console.log(Jackie.jobTitle)
Jackie.status = "part time"
console.log(Jackie.status)

employees.push("Zara", "Eriyah", "Jackie")
console.log(employees)