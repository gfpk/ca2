describe("Calculator", function() {
    it("should be able to add numbers", function() {
        expect(Calculator.addIt(2,3)).toBe(5);
    })
    it("should be able to subtract numbers", function() {
        expect(Calculator.subtractIt(2,3)).toBe(-1);
    })
    it("should be able to multiply numbers", function() {
        expect(Calculator.multiplyIt(2,3)).toBe(6);
    })
    it("should be able to divide numbers", function() {
        expect(Calculator.divideIt(9,3)).toBe(3);
    })
    it("should be able avoid zero division problem", function(){
        expect(function() {Calculator.divideIt(12, 0)}).toThrow(new Error("Cannot divide by '0' Hombre"))
    })
    it("should be able to deal with strings", function(){
        expect(function() {Calculator.addIt("sausage", 4)}).toThrow(new Error("at least of fields is not an number"))
    })
})