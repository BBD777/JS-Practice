doubleArray([1,1,3]) ;
forloop();

 function doubleArray(nums){
  const numsBoubled = [];
  if (nums ===0){
    return
  }
  for(let i =0; i<nums.length;i++){
    const num = nums[i];
    numsBoubled.push(num*2);
  }
  console.log(numsBoubled)
 }

 function forloop(){
  const cars = ["BMW", "Volvo", "Mini"];

  let text = "";
  for (let x of cars) {
    text += x + "<br>";
  }

  document.getElementById("demo").innerHTML = text;
 }