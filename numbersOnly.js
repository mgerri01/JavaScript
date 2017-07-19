function numbersOnly(){
  var oldArray =[1,"apple", -3, "orange", 0.5];
    var newArray = [];

    for (var i = 0; i < oldArray.length; i++) {
      dataType=typeof oldArray[i];
      if (dataType === "number") {
        newArray.push(oldArray[i]);
      }
    }
      console.log(newArray);
  }
  numbersOnly();
