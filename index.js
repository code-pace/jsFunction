// checkYuGiOh function
const checkYuGiOh = n => {
    Number(n);
    let checkedNum = [];
    if(isNaN(n)) {
      return `Invalid parameter: "${n}"`;
    }
    else {
      for(i=1; i<=n; i++) {
        let d = "";
        if(i%2 === 0){
          if(d !== "") {
            d += "-Yu";
          }
          else{
            d += "Yu"
          }
        }
        if(i%3 === 0) {
          if(d !== "") {
            d += "-Gi";
          }
          else{
            d += "Gi"
          }
        }
        if(i%5 === 0) {
          if(d !== "") {
            d += "-Oh";
          }
          else{
            d += "Oh"
          }
        }
        if(d === "") {
          d = i
        }
        checkedNum.push(d)
      }
      return checkedNum
    }
  }// checkYuGiOh end


//convertFahrToCelsius
const convertFahrToCelsius = n => {
  x = n;
  Number(n);
  if(x instanceof Array) {
    return `${JSON.stringify(n)} is not a valid number but a \ an array`
  }
  else if(x instanceof Object) {
    return `${JSON.stringify(n)} is not a valid number but a \ an object`
  }
  else if(typeof(x) === "string") {
    return `${x} is not a valid number but a \ an ${typeof(x)}`
  }
  else {
    let c = (n - 32) * (5/9);
    let d = c.toFixed(4);
    return d;
  }
}// changeFahrToCelsius end

  convertFahrToCelsius()
  checkYuGoHi()