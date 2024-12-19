document.getElementById("btn1").addEventListener("click",add);

async function add(e) {
    e.preventDefault();

    let empno = document.getElementById("eno").value;
    let myname = document.getElementById("nm").value;
    let mycity = document.getElementById("city").value;
    let mysalary = document.getElementById("salary").value;


    let url ="http://localhost:3000/employees";

    // post request

    try{
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                employeeno:empno,
                name:myname,
                city:mycity,
                salary:mysalary,

            }),

            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
        });
        console.log(response);
        let value =await response.json();
        console.log(value);
        alert("Data seccessfully sent");

     } catch (error) {
        console.log(error);
        alert("error occured while sending data");
    }
    
}
add();