pragma solidity ^0.4.2;

contract student {
 struct people{
bytes32 firstname;
bytes32 lastname;
bytes32 email;
uint age;
uint phone;
uint number;
  }
people[] public student;
uint index;
function add_person(bytes32 fname, bytes32 lname,bytes32 emaild,uint agee,uint phno) {
people memory nperson;
nperson.firstname=fname;
nperson.lastname=lname;
nperson.email=emaild;
nperson.age=agee;
nperson.phone=phno;
nperson.number=index+1;
student.push(nperson);
}
function lengthh()returns(uint i){
i=index;
return i;
}
function view2(uint ind)returns(bytes32 n1,bytes32 n2,uint a1,uint p1,bytes32 e1){
people memory currentperson;
currentperson=student[ind];
n1=currentperson.firstname;
n2=currentperson.lastname;
a1=currentperson.age;
p1=currentperson.phone;
e1=currentperson.email;
return(n1,n2,a1,p1,e1);
}
}


