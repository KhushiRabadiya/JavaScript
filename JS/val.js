//First name
function validateform1(){
  var fn = document.getElementById("fname").value;
  var nameReg = /^[A-Za-z]*$/;
  if (fn == "" ) {
    document.getElementById('fname1').innerHTML="*Please fill first name";
  }
  else{
    if(!nameReg.test(fn)){
      document.getElementById('fname1').innerHTML="*Digits & Space not allowed";
    }
    else{
      document.getElementById('fname1').innerHTML="";
    }
  }
}
  //Last name
function validateform2(){
  var ln = document.getElementById("lname").value;
  var nameReg = /^[A-Za-z]*$/;
  if (ln == "" ) {
    document.getElementById('lname1').innerHTML="*Please fill last name";
  }
  else{
    if(!nameReg.test(ln)){
      document.getElementById('lname1').innerHTML="*Digits & Space not allowed";
    }
    else{
      document.getElementById('lname1').innerHTML="";
    }
  }
}

//Address
function validateform3(){
  //Street1
  var st1 = document.getElementById("street1").value;
  var x= /^[a-z," ",0-9]+$/;
  //var x = /^(\d|\w)+$/;
  if (st1 == "" ) {
    document.getElementById('str1').innerHTML="*Please fill street 1";
  }
  else{
    if(!x.test(st1)){
      document.getElementById('str1').innerHTML="*Special characters are not allowed";
    }
    else{
      document.getElementById('str1').innerHTML="";
    }
  }
}
  //Street2
function validateform4(){  
  var st2 = document.getElementById("street2").value;
  var x=/^[a-z," ",0-9]+$/;
  if (st2 == "" ) {
    document.getElementById('str2').innerHTML="*Please fill street 2";
  }
  else{
    if(!x.test(st2)){
      document.getElementById('str2').innerHTML="*Special characters are not allowed";
    }
    else{
      document.getElementById('str2').innerHTML="";
    }
  }
}

//city
function validateform5(){
  var c = document.getElementById("city").value;
  var nameReg = /^[A-Za-z]*$/;
  if (c == "" ) {
    document.getElementById('cy').innerHTML="*Please fill City";
  }
  else{
    if(!nameReg.test(c)){
      document.getElementById('cy').innerHTML="*Digits & Space not allowed";
    }
    else{
      document.getElementById('cy').innerHTML="";
    }
  }
}

//State
function validateform6(){
  var st = document.getElementById("state").value;
  var nameReg = /^[A-Za-z]*$/;
  if (st == "" ) {
    document.getElementById('pr').innerHTML="*Please fill State name";
  }
  else{
    if(!nameReg.test(st)){
      document.getElementById('pr').innerHTML="*Digits & Space not allowed";
    }
    else{
      document.getElementById('pr').innerHTML="";
    }
  }
}

//zip code
function validateform7(){
  var zc = document.getElementById("code").value;
  if (zc == "" ) {
    document.getElementById('zi').innerHTML="*Please fill Zip code";
  }
  else{
    if(isNaN(zc)){
      document.getElementById('zi').innerHTML="*Only digits are allowed";
    }
    else if(zc.length != 6){
      document.getElementById('zi').innerHTML="Only 6 digits are allowed";
    }
    else{
      document.getElementById('zi').innerHTML="";
    }
  }
}

// Mobile no
function validateform8(){
  var mn = document.getElementById("mno").value;
  var mnoReg = /^[6-9]\d{9}$/;
  if (mn == "" ) {
    document.getElementById('pn').innerHTML="*Please fill Mobile number";
  }
  else{
    if(!mnoReg.test(mn)){
      document.getElementById('pn').innerHTML="*Invalid Mobile number";
    }
    else{
      document.getElementById('pn').innerHTML="";
    }
  }
}

  //E-mail
function validateform9(){
  var ml = document.getElementById("mail").value;
  var mlReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if (ml == "" ) {
    document.getElementById('ml1').innerHTML="*Please fill Email address";
  }
  else{
    if(!mlReg.test(ml)){
      document.getElementById('ml1').innerHTML="*Invalid";
    }
    else{
      document.getElementById('ml1').innerHTML="";
    }
  }
}

  //Select
function validateform10(){
  var e = document.getElementById("sel");
  var optionSelIndex = e.options[e.selectedIndex].value;
  if (optionSelIndex == 0) {
    document.getElementById('sel1').innerHTML="*Please select any one";
  }
  else{
    document.getElementById('sel1').innerHTML="";
  }
}
  
  //Text area
function validateform11(){
  var f1 = document.getElementById("area1").value;
  if (f1 == "" ) {
    document.getElementById('feedback').innerHTML="*Please feedback us";
  }
  else{
    if(!isNaN(f1)){
      document.getElementById('feedback').innerHTML="*Only digits are not allowed";
    }
    else if(f1.length <= 5){
      document.getElementById('feedback').innerHTML="*Please fill in more than 5 letters";
    }
    else{
      document.getElementById('feedback').innerHTML="";
    }
  }
}

function validateform12(){
  var f2 = document.getElementById("area2").value;
  if (f2 == "" ) {
    document.getElementById('imp').innerHTML="*Please give suggestion";
  }
  else{
    if(!isNaN(f2)){
      document.getElementById('imp').innerHTML="*Only digits are not allowed";
    }
    else if(f2.length <= 5){
      document.getElementById('imp').innerHTML="*Please fill in more than 5 letters";
    }
    else{
      document.getElementById('imp').innerHTML="";
    }
  }
}

  //Check box
function validateform13(){
  if(this.container.checked == false){
    document.getElementById('box').innerHTML="*You didn't choose any of the checkboxes!";
  }
  else{
    document.getElementById('box').innerHTML="";
  }
}
  //Radio button
function validateform14(){
  var ml = document.getElementsByName('gender');
  var genValue = false;
  for(var i=0; i<ml.length;i++){
    if(ml[i].checked == true){
      genValue = true;    
      }
  }
  if(!genValue){
    document.getElementById('g1').innerHTML="*Please Choose the gender";
  }
  else{
    document.getElementById('g1').innerHTML="";
  } 
}


