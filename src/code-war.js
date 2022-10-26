function containsValue(array, value) {
    return array.includes(value)
}

console.log(containsValue([1,2,3,4], 4), "expected = true")
console.log(containsValue(["hello", "goodbye"], "hell"))

