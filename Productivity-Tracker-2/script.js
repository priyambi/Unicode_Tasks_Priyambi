var row=1;

var entry=document.getElementById("entry");
entry.addEventListener("click",display);
function display(){
  var name=document.getElementById("taskname").value;
  var date=document.getElementById("date").value;
  var time=document.getElementById("time").value;
  var comp=document.getElementById("compulsory").value;

  if(!name || !date || !time || !comp)
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

  cell1.innerHTML = name;
  cell2.innerHTML = date;
  cell3.innerHTML = time;
  cell4.innerHTML = comp;

  row++
}

