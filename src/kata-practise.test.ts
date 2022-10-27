import twoAverages from "./kata-practise"

test("find the average of both negative and postive, print as an array"() =>{
    expect(twoAverages([2, 3, 4, -5, -6, -7])).toBe([3, -6]);
    expect(twoAverages([1,2,3,4])).toBe([2.5, null]);
    expect(twoAverages([-1, -2, -3, -4])).toBe([null, 2.5]);
    expect(twoAverages([0,0,0,0])).toBe([null, null]);
    expect(twoAverages([-1, 1])).toBe([1, -1]);
})