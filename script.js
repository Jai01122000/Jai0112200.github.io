
function display()  {
  alert("Hello")
}
function gpacalc() {
  var j=document.getElementBYID("a").value; 
  var k=document.getElementBYID("b").value; 
  var l=document.getElementBYID("c").value; 
  var m=document.getElementBYID("d").value; 
  var n=document.getElementBYID("e").value; 
  var o=document.getElementBYID("f").value; 
  var p=document.getElementBYID("g").value; 
  var q=document.getElementBYID("h").value; 
  
  var s=gradepoint(j);
  var t=gradepoint(k);
  var u=gradepoint(l);
  var v=gradepoint(m);
  var w=gradepoint(n);
  var x=gradepoint(o);
  var y=gradepoint(p);
  var z=gradepoint(q);

  var gpa=0;
  gpa=((4*s)+(4*t)+(3*u)+(3*v)+(3*w)+(4*x)+(2*y)+(2*z))/25;
  alert(gpa);


  function gradepoint(grade)  {
    if (grade=== 'O' or 'o') {
      return 10;
    }
    else if (grade=== 'A+' or 'a+') {
      return 9;
    }
    else if (grade=== 'A' or 'a') {
      return 8;
    }
    else if (grade=== 'B+' or 'b+') {
      return 7;
    }
    else if (grade=== 'B' or 'b') {
      return 6;
    }
    else if (grade=== "RA" or "ra" or "SA" or "sa" or "W" or "w") {
      return 0;
  }
    else {
    
    }
}
}
