
var msg;
var account;
var accounts;
var meta;
meta = student.deployed();
var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi =JSON.parse(JSON.stringify(meta.abi));
var add=meta.address;
var fnction=web3.eth.contract(ab).at(add);

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function details() {
  
  var fname = document.getElementById("fname").value;
  var lname =document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var age = parseInt(document.getElementById("age").value);
  var phno =parseInt(document.getElementById("phno").value);
  table = document.getElementById("mytabledata")
  var rowcount=fnction.lengthh({from:account});
  var row=table.insertRow(rowcount);
  row.insertCell(0).innerHTML=web3.toAscii(fname.value);
  row.insertCell(1).innerHTML=web3.toAscii(email.value);
  row.insertCell(2).innerHTML='<input type="button" value ="vieww" onClick="Javascript:viewDetails(this)">';
  meta.add_person(fname, lname,email,phno,age, {from: account}).then(function() {
    setStatus("details complete!");
       
  }).catch(function(e) {
    console.log(e);
    setStatus("wrong details");
  });
};

function viewDetails(obj){
  var index=obj.parentNode.parentNode.rowIndex;
  var table=document.getElementById("mytabledata");
  table.display(index);
  window.location="display.html"
}	
function display(ind)

var a = meta.view2(ind);
 var c=document.getElementBYId("dis");
var d="NAME:"+web3.toAscii(a[0])+web3.toAscii(a[1])+"<br>Age:"+a[2]+"<br>Phone:"+a[3]+"<br>Email:"+web3.toAscii(a[4])+" ";
c.innerHTML=d;
}
window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
    
 })
}
