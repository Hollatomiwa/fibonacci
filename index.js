function sequence() {
  var a, b, result;
  a = 0;
  b = 1;
  result = b;
  var finalResult = [];
  var num = document.getElementById("num").value;
  for(var i = 1; i <= num; i++){
    result = a + b;
    a = b;
    b = result;
    finalResult.push(result);
    document.getElementById("res").style.display = "block";
    document.getElementById("res").value = finalResult;

    console.log(finalResult);
  }
}
