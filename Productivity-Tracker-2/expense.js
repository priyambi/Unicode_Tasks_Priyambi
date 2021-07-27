var row=1;

var entry=document.getElementById("entry");
entry.addEventListener("click",display);
function display(){
  var income=document.getElementById("income").value;
  var savings=document.getElementById("savings").value;
  var item=document.getElementById("item").value;
  var cp=document.getElementById("cp").value;
  var quantity=document.getElementById("quantity").value;
  var totalamount=document.getElementById("ta").value;

  if(!income || !savings || !item || !cp || !quantity|| !totalamount)
  {
    alert("Kindly fill all the details");
    return;
  }
  var display=document.getElementById("data");

  var newRow=display.insertRow(row);

  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  

  cell1.innerHTML = item;
  cell2.innerHTML = cp;
  cell3.innerHTML = quantity;
  cell4.innerHTML = totalamount;


  row++
}


