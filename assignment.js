

//convert kilometer to meter

function kilometerToMeter(distance) {
  let meter = distance * 1000; //we know 1 kilometer equal to 1000 meter.
  if (meter < 0){
    return 'distance can not be negative';
  }
  return meter;
}
console.log(kilometerToMeter(10));
console.log(kilometerToMeter(-1));

//budget calculator 

function budgetCalculator(watch, mobile, laptop) {
  //initial products price

  let watchPrice = 50;
  let mobilePrice = 100;
  let laptopPrice = 500;

  let total = (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);

  return total;
}

console.log(budgetCalculator(2,3,5));

//hotel cost

function hotelCost(days) {

var cost = 0;

if(days <= 10){
  cost = days * 100;
}
else if(days <=20){

  var firstPart = 10*100;
  var remaining = days - 10;
  var secondPart = remaining*80;
  cost = firstPart + secondPart;
}
else{
  var firstPart = 10*100;
  var secondPart = 10*80;
  var remaining = days - 20;
  var thirdPart = remaining * 50;

  cost = firstPart + secondPart + thirdPart;
}
return cost;
}

console.log(hotelCost(10));
console.log(hotelCost(20));
console.log(hotelCost(30));


// find longest string

function megaFriend(array) {
  
  var store = 0;
  var longest;
  
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > store) {
       store = array[i].length;
      longest = array[i];
    }
  }
  return longest;
  
}
 
console.log(megaFriend (['Al-amin' , 'Muhamamd Rakib', 'Saiful']));





