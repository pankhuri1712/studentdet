alert("Hello world");

var account;
var accounts;
var i;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};
function details() {
  var meta = student.deployed();

  var fname = document.getElementById("fname").value;
  var lname =document.getElementById("lname").value;
  var email = document.getElementById("email").value;
 var age = parseInt(document.getElementById("age").value);

  var phno =parseInt(document.getElementById("phno").value);
 

  meta.add_person(fname, lname,email,phno,age, {from: account}).then(function() {
    setStatus("details complete!");
    window.location.href="pop.html";
    
  }).catch(function(e) {
    console.log(e);
    setStatus("wrong details");
  });
};
function myController(g){

var meta=student.deployed();
 var event=student.vieww();
for(i=0;i<lth;i++){
g.studentt=[firstnamess:(hex2a)firstnames[i]];
[emailid:(hex2a)emaild[i]];
[view:i];
]}
meta.view1({from:account}).then(function(){
setStatus("details complete!");
}).catch(function(e) {
    console.log(e);
    setStatus("wrong details");
  });
};
function display(uint ind){
var meta=student.deployed();
 var event=student.disp();
meta.view2(ind,{from:account}).then(function(){
setStatus("details complete!");
}).catch(function(e) {
    console.log(e);
    setStatus("wrong details");
  });
};   




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
