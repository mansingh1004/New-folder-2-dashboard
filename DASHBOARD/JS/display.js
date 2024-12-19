async function dataShow() {
  let mytable = `
      <table border="1px" width="600px" bgcolor="lightblue">
      <tr bgcolor="yellow">
      <th> Employee no</th>
      <th> Employee Name</th>
      <th> City</th>
      <th> Salary</th>
      
        </tr>
        `;

  //url of the server to fetch data
  let url = `http://localhost:3000/employees`;

  // get data from server
  let myobj = await fetch(url);
  console.log(myobj); // response object

  //converting response object to json object (array of objects)
  let data = await myobj.json();
  //  console.log(data);

  // looping through each object in the array

  data.map((key) => {
    mytable += `
            <tr>
            <td>${key.employeeno}</td>
            <td>${key.name}</td>
            <td>${key.city}</td>
            <td>${key.salary}</td>
            </tr>
            `
  })



  mytable += `</table>`;

  //  console.log(mytable)

  document.getElementById("demo").innerHTML = mytable;

}
dataShow();