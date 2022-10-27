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

function seperate(inputArray: number[]): number[][]{
    const positive: number[] = []
    const negative: number[] = []
    inputArray.forEach(item => item > 0 ? positive.push(item) : negative.push(item));  
    return [positive, negative] 
} 
console.log(seperate([1, 2, 3, -1, -2, -3]), "expected [[1,2,3], [-1,-2, -3]")





export default twoAverages;