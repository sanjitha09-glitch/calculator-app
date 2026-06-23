let expression = "";

const expressionBox =
document.getElementById("expression");

const resultBox =
document.getElementById("result");

function append(value){

 expression += value;

 expressionBox.innerText = expression;
}

function clearAll(){

 expression = "";

 expressionBox.innerText = "";

 resultBox.innerText = "0";
}

function backspace(){

 expression = expression.slice(0,-1);

 expressionBox.innerText = expression;
}

function calculate(){

 try{

  const result =
  math.evaluate(expression);

  saveHistory(
  expression + " = " + result
  );

  resultBox.innerText = result;

  expression = result.toString();

 }catch{

  resultBox.innerText = "Error";
 }
}

function saveHistory(item){

 let history =
 JSON.parse(
 localStorage.getItem("history")
 ) || [];

 history.unshift(item);

 localStorage.setItem(
 "history",
 JSON.stringify(history)
 );

 loadHistory();
}

function loadHistory(){

 let history =
 JSON.parse(
 localStorage.getItem("history")
 ) || [];

 let html="";

 history.forEach(h=>{

  html += `<li>${h}</li>`;
 });

 document
 .getElementById("historyList")
 .innerHTML = html;
}

function toggleHistory(){

 document
 .getElementById("historyPanel")
 .classList
 .toggle("hidden");
}

function toggleTheme(){

 document.body
 .classList
 .toggle("light");
}

loadHistory();