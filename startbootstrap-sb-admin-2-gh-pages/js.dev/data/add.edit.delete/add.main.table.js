$(document).ready(function () {
    $("#addsuccess-maintb").click(function (e) { 
        e.preventDefault();
        var id = $("#add-id-maintb").val(); 
        var fname = $("#add-fname-maintb").val(); 
        var lname = $("#add-lname-maintb").val(); 
        var date = $("#add-birthday-maintb").val(); 
        // add check id.
        // add to array.
        var detail = {"employeeID": id,"firstName": fname,"lastName": lname,"dateOfBirth": date,"contactemployeeinfoes":[],"qualifications":[],"timeinfoes":[],"workhistories":[]}; 
        dbEmployeeDetail.push(detail);
        var em0 = [detail, [], [], [], [], []]; 
        Employee.push(em0);
        location.reload();
    });
});
