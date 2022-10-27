/* Return the two separate averages of negative numbers and positive numbers in a given array of numbers.
Return the averages as two elements of an array, or, if you know objects, as properties averageOfPositives and averageOfNegatives
Use null to indicate when an average is not possible - e.g. when there are no positive numbers.
### Example:
`calcAveragesNegativeAndPositive([10, -100, 20, -200, -3])` 
should return either the array
 `[15, -101]`
*or* the object
`{ averageOfPositives: 15, averageOfNegatives: -101 }`
where *`15`* is the average of all the positive numbers (10, 20)  and *`-101`* is the average of all the negative numbers (-100, -200, -3) */

function seperate(inputArray: number[]): number[][] {
  const positive: number[] = [];
  const negative: any[] = [];
  inputArray.forEach((item) =>
    item > 0 ? positive.push(item) : ( item === 0 ? negative.push(null) : negative.push(item))
  );
  return [positive, negative];
}

function twoAverages(inputArray: number[]): any[] {
  const seperatedArray = seperate(inputArray);
  const positive = seperatedArray[0];
  const negative = seperatedArray[1];
  let countP = 0;
  let countN = 0;
  for (const item of positive) {
    countP += item;
  }
  for (const i of negative) {
    countN += i;
  }

  let averageOfPos: number | null = countP / positive.length;
  let averageOfNeg: number | null = countN / negative.length;
  if (positive.length < 1) {
    averageOfPos = null;
  }
  if (negative.length < 1) {
    averageOfNeg = null;
  }

  //const averageOfPos = positive.reduce((a, b) => a + b) / positive.length;
  //const averageOfNeg = negative.reduce((a, b) => a + b) / negative.length;
  return [averageOfPos, averageOfNeg];
}

console.log(seperate([1, 2, 3, -1, -2, -3]), "expected [[2], [-2]");

export default twoAverages;
