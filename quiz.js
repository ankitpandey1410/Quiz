var question = ['1 + 4 = ?' , '8 - 5 = ?' , '4 * 2 = ?' , '28 / 7 = ?'];
var count = 0;

function myFunction()
{
  var person = prompt("Please Enter your name : " , "Harry Potter");
  if(person != null && person != " ")
  {
    document.getElementById("demo").innerHTML = "Hello " + person + " ! We will start the quiz as soon as you hit the start."
    document.getElementById("start").style.display = "block";
  }
  
}

function afunc()
{
  document.getElementById("question").innerHTML = question[0];
  count = 0;
  document.getElementById("demo").innerHTML = "";
  document.getElementById("score").innerHTML = "";
  document.getElementById("hela").style.display = "none";
}

function bfunc(i)
{
  var c = i+1;
  document.getElementById("question").innerHTML = question[c];
  ans()
}

function Next()
{
  document.getElementById("result").innerHTML = "";
  var i = 0;
  var c = question.length;

  for(i ; i<c ; i++)
  {
    if(document.getElementById("question").innerHTML === question[i])
    {
      bfunc(i);
      break;
    }
  }
}


function score()
{
  document.getElementById("score").innerHTML = "Your score is " + count + " out of 4." 
}





function ans()
{
  if(document.getElementById("question").innerHTML === "1 + 4 = ?")
  {

    var opt1 = document.createElement("button");
    opt1.innerHTML = "6";
    document.body.appendChild(opt1);
    opt1.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
    
    var opt2 = document.createElement("button");
    opt2.innerHTML = "5";
    document.body.appendChild(opt2);
    opt2.onclick = function opta(){
      document.getElementById("result").style.color = "green";
      document.getElementById("result").innerHTML = "Your anzwer is correct."
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt3 = document.createElement("button");
    opt3.innerHTML = "3";
    document.body.appendChild(opt3);
    opt3.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt4 = document.createElement("button");
    opt4.innerHTML = "4";
    document.body.appendChild(opt4);
    opt4.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
  }






  else if(document.getElementById("question").innerHTML === "8 - 5 = ?")
  {

    var opt1 = document.createElement("button");
    opt1.innerHTML = "3";
    document.body.appendChild(opt1);
    opt1.onclick = function opta(){
      document.getElementById("result").style.color = "green";
      document.getElementById("result").innerHTML = "Your answer correct."
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
    
    var opt2 = document.createElement("button");
    opt2.innerHTML = "4";
    document.body.appendChild(opt2);
    opt2.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt3 = document.createElement("button");
    opt3.innerHTML = "1";
    document.body.appendChild(opt3);
    opt3.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt4 = document.createElement("button");
    opt4.innerHTML = "2";
    document.body.appendChild(opt4);
    opt4.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
  }





  else if(document.getElementById("question").innerHTML === "4 * 2 = ?")
  {

    var opt1 = document.createElement("button");
    opt1.innerHTML = "3";
    document.body.appendChild(opt1);
    opt1.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
    
    var opt2 = document.createElement("button");
    opt2.innerHTML = "4";
    document.body.appendChild(opt2);
    opt2.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt3 = document.createElement("button");
    opt3.innerHTML = "1";
    document.body.appendChild(opt3);
    opt3.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt4 = document.createElement("button");
    opt4.innerHTML = "8";
    document.body.appendChild(opt4);
    opt4.onclick = function opta(){
      document.getElementById("result").style.color = "green";
      document.getElementById("result").innerHTML = "Your answer is correct."
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

  }





  else if(document.getElementById("question").innerHTML === "28 / 7 = ?")
  {

    var opt1 = document.createElement("button");
    opt1.innerHTML = "3";
    document.body.appendChild(opt1);
    opt1.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }
    
    var opt2 = document.createElement("button");
    opt2.innerHTML = "7";
    document.body.appendChild(opt2);
    opt2.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt3 = document.createElement("button");
    opt3.innerHTML = "4";
    document.body.appendChild(opt3);
    opt3.onclick = function opta(){
      document.getElementById("result").style.color = "green";
      document.getElementById("result").innerHTML = "Your answer is correct."
      count++;
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

    var opt4 = document.createElement("button");
    opt4.innerHTML = "8";
    document.body.appendChild(opt4);
    opt4.onclick = function opta(){
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Your answer is wrong !"
      setTimeout(Next , 1000);
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
    }

  }



  else{
    document.getElementById("question").innerHTML = "Quiz ends here."
    score();
  }
}