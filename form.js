var nameinput = document.getElementById("name")
var output = document.getElementById("output")

// -----------------------------------------------
function save(event){
    event.preventDefault();
   var name  = nameinput.value
   var email = document.getElementById("email").value
   var age = document.getElementById("age").value
   var select = document.getElementById("select").value
   var gender = document.querySelector('input[name = "Gender"]:checked').value
   var tr = document.createElement("tr")
   output.append(tr)
   tr.innerHTML =`<td>${name}</td>
   <td>${age}</td>
   <td>${select}</td>
   <td>${gender}</td>
    <td>${email}</td>
    <td><button id = "del" onclick = "delet(event)">DELETE</button></td>
    `
    ;
}
function delet(event){

    event.target.closest("tr").remove()
   }