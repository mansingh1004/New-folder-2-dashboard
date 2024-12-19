

//put
function editRow(id){

    document.getElementById(`eno-${id}`).removeAttribute("readonly");
    document.getElementById(`nm-${id}`).removeAttribute("readonly");

    document.getElementById(`ct-${id}`).removeAttribute("readonly");

    document.getElementById(`sl-${id}`).removeAttribute("readonly");

    document.getElementById(`edit-${id}`).style.display="none";
    document.getElementById(`save-${id}`).style.display="inline";

} 


async function  saveRow(id) {
    let myemployeeno = document.getElementById(`eno-${id}`).value;
    let myname = document.getElementById(`nm-${id}`).value;

    let mycity =document.getElementById(`ct-${id}`).value;

    let mysalary =document.getElementById(`sl-${id}`).value;

   let url =`http://localhost:3000/employees/${id}`;
   let responseObj =await fetch(url,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json; charrset=utf-8",
    },

    body:JSON.stringify({
        employeeno:myemployeeno,
        name:myname,
        city:mycity,
        salary:mysalary,
    }),
   });

   console.log(responseObj);
   let data = await responseObj.json();

   console.log(data);
   alert("Data update successfully");

    
}









// Delete 

async function recDel(id) {

    let url=`http://localhost:3000/employees/${id}`;

    let responseObj =await fetch(url,{
        method:"DELETE",
    });

    console.log(responseObj);

    let data = await responseObj.json();
    console.log(data);
    alert("data successfully deleted");
    
}









// update date

async function display() {

    let table =`
     <table>
     <tr>
     <th>Employee no</th>
     <th>Employee Name</th>
     <th>City</th>
     <th>Salary</th>
     <th>Action</th>

     </tr>
    `;

    let url= "http://localhost:3000/employees";

    let responseObj = await fetch(url); 

    let mydata = await responseObj.json();// arrary of object 
    mydata.map((key)=>{
        table +=`
        <tr>
        <td> <input type="text" value="${key.employeeno}" id="eno-${key.id}" readonly></td>
        <td> <input type="text" value="${key.name}" id="nm-${key.id}" readonly></td>
         <td> <input type="text" value="${key.city}" id="ct-${key.id}" readonly></td>
        <td> <input type="number" value="${key.salary}" id="sl-${key.id}" readonly></td>

        <td>
        <a onclick="recDel('${key.id}')" class="button button-delete">Delete</a>
        <a onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
        <a  onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save">Save</a>


        </td>
        

        </tr>
        
        `

    });
    document.getElementById("demo").innerHTML=table;
    
}

display();