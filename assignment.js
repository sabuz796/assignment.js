function feetToMIle(n) {
  let mile = n / 5280;
  if (mile < 0){
    return 'distance can not be negative';
  }
  return mile;
}

console.log(feetToMIle(12));
console.log(feetToMIle(1));
console.log(feetToMIle(-1));
console.log(feetToMIle(1000));


// ------------

function woodCalculator(chair, table, bed) {
  var onlyChair = chair * 1;
  var onlyTable = table * 3;
  var onlyBed = bed * 5;

  var total = onlyChair + onlyTable + onlyBed;
  return total;
}

console.log('Number of total wood need is',woodCalculator(1, 3, 5)); //total
console.log('Number of total wood need is',woodCalculator(1, 0, 0)); //only chair
console.log('Number of total wood need is',woodCalculator(0, 2, 0)); //only table
console.log('Number of total wood need is',woodCalculator(0, 0, 5)); // only bed
console.log('Number of total wood need is',woodCalculator(0, 3, 5)); // table & bed

