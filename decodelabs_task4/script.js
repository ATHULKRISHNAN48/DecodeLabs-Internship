const API="https://your-render-url.onrender.com/students";

async function getStudents(){

const response=await fetch(API);

const students=await response.json();

const table=document.getElementById("studentTable");

table.innerHTML="";

students.forEach(student=>{

table.innerHTML+=`
<tr>
<td>${student.name}</td>
<td>${student.email}</td>
<td>${student.age}</td>
</tr>
`;

});

}

async function addStudent(){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const age=document.getElementById("age").value;

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
age
})
});

getStudents();

}

getStudents();
