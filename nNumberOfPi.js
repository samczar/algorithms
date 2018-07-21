//Pi
const p =Math.PI;
 console.log(Math.PI);
function piNumber(array,n){
  if(n<1 || n > 19){
    console.log(0);
    return 0
  }else{
  var result = array*Math.pow(10,n-1);
  // *(Math.pow(10,n-1))
  console.log('result is: ',result);
  return result;
  }

}

piNumber(p,20);
function pnumb(n){

 var index = p.toString();
var result=  index.split('.').join('');
console.log(result);
if (n < 1 || n > 19){
  return 0
}else{
for(i = n - 1; i <= result.length; i++){
  console.log(`${n} value of PI is ${result[n-1]}`)
  return result[n - 1];
}
}

}
pnumb(20);