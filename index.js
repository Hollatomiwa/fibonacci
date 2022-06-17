// function sequence() {
//   var ending = document.getElementById("num").value;
//   var start = [0 , 1];
//   for (var i = 2; i <= ending; i++){
//     start.push(start[i - 2] + start[i - 1]);
//     // start[i] = start[i - 2] + start[i - 1];
//     document.getElementById("res").value = start[i].split(",");
//     console.log(start[i]);
//   }
// }

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
