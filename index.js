console.log('hello world');

var jsonObj = {"新奇台北二房車獨棟別墅":"1","1":"2","2":"3","3":"4"};
var obj = Object.keys(jsonObj).map(function(_) { return jsonObj[_]; });
console.log(jsonObj)


// let text = "";
// for (let i = 0; i < myObj.cars.length; i++) {
//   text += myObj.object_name + ", ";
// }
//document.getElementById("demo").innerHTML = text;

var object_names = $(".data").data("object_names");