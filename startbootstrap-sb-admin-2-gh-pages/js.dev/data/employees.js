var dbEmployeeDetail = [
    {"employeeID":"17020221","firstName":"Chiến1","lastName":"Nguyễn","dateOfBirth":"1999-11-09T00:00:00","contactemployeeinfoes":[],"qualifications":[],"timeinfoes":[],"workhistories":[]},
    {"employeeID":"17020222","firstName":"Chiến2","lastName":"Nguyễn","dateOfBirth":"1999-11-09T00:00:00","contactemployeeinfoes":[],"qualifications":[],"timeinfoes":[],"workhistories":[]},
    {"employeeID":"17020608","firstName":"Nguyễn Duy Chiến","lastName":"Đại ca","dateOfBirth":"1999-11-09T00:00:00","contactemployeeinfoes":[],"qualifications":[],"timeinfoes":[],"workhistories":[]}
]

var dbEmployeeContact = [
    {"idContact":1,"employeeID":"17020608","phoneNumber":"012539333","ctCity":"Thái Bình","ctAddress":"Kiến Xương","ctPostalCode":"XXX","employeedetail":null},
    {"idContact":2,"employeeID":"17020221","phoneNumber":"0122222","ctCity":"Thái Bình","ctAddress":"Kiến Xương","ctPostalCode":"YYY","employeedetail":null},
    {"idContact":3,"employeeID":"17020222","phoneNumber":"019999999","ctCity":"Thái Bình","ctAddress":"Kiến Xương","ctPostalCode":"YYY","employeedetail":null}
]

var dbEmployeeSalary = [
    {"idSalaryInfo":1,"employeeID":"17020608","monthlySalary":10,"moneyCurrency":10,"moneyDeductions":10,"moneyInsurance":10},
    {"idSalaryInfo":2,"employeeID":"17020608","monthlySalary":100,"moneyCurrency":10,"moneyDeductions":12,"moneyInsurance":21},
    {"idSalaryInfo":3,"employeeID":"17020608","monthlySalary":101,"moneyCurrency":10,"moneyDeductions":12,"moneyInsurance":21}
]

var dbEmployeeWorkHistory = [
    {"idWorkHistory":1,"employeeID":"17020608","companyName":"FPT","address":"Hà Nội","phoneNumber":"113","officenumber":"000","employeedetail":null},
    {"idWorkHistory":2,"employeeID":"17020608","companyName":"FPT","address":"Hà Nội","phoneNumber":"113","officenumber":"000","employeedetail":null}
]

var dbEmployeeQualification = [
    {"idQualification":1,"employeeID":"17020608","experience":"Fresher","employeedetail":null},
    {"idQualification":2,"employeeID":"17020608","experience":"Fresher","employeedetail":null}
]

var dbEmployeeTimeInfo = [
    {"idTime":1,"employeeID":"17020608","workHours":100,"offDay":1,"overTime":10,"extraday":5,"employeedetail":null},
    {"idTime":2,"employeeID":"17020608","workHours":100,"offDay":1,"overTime":10,"extraday":5,"employeedetail":null}
]

var Employee = []; 

$(document).ready(function () {
    for (var i = 0; i < dbEmployeeDetail.length; i++){
        var Contact = dbEmployeeContact.filter(dbEmployeeContact => dbEmployeeContact.employeeID == dbEmployeeDetail[i].employeeID); 
        var Salary = dbEmployeeSalary.filter(dbEmployeeSalary => dbEmployeeSalary.employeeID == dbEmployeeDetail[i].employeeID); 
        var Work = dbEmployeeWorkHistory.filter(dbEmployeeWorkHistory => dbEmployeeWorkHistory.employeeID == dbEmployeeDetail[i].employeeID); 
        var Qualification = dbEmployeeQualification.filter(dbEmployeeQualification => dbEmployeeQualification.employeeID == dbEmployeeDetail[i].employeeID); 
        var Time = dbEmployeeTimeInfo.filter(dbEmployeeTimeInfo => dbEmployeeTimeInfo.employeeID == dbEmployeeDetail[i].employeeID); 
        Employee[i] = [dbEmployeeDetail[i], Contact, Salary, Work, Qualification, Time]; 
    }
});