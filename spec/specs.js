describe('triangleTracker', function() {
    it ("is equilateral when all sides are equal", function() {
        expect(triangleTracker(4,4,4)).to.equal("Equilateral");
    })

    it ("is isosceles when 2 sides are exactly the same", function() {
        expect(triangleTracker(4,4,6)).to.equal("Isosceles");
    })

    it ("is scalene when 3 sides are not equal", function() {
        expect(triangleTracker(4,5,6)).to.equal("Scalene");
    })
})





// describe('leapYear', function() {
//     it ("is false for a year that is not divisible by 4", function() {
//         expect(leapYear(1999)).to.equal(false);
//     });
//
//     it ("is true for most years divisible by 4", function() {
//         expect(leapYear(2012)).to.equal(true);
//     });
//
//     it("is false for most years divisible by 100", function() {
//         expect(leapYear(1900)).to.equal(false);
//     });
//
//     it("is true for a year that divisible by 400", function() {
//         expect(leapYear(2000)).to.equal(true);
//     });
// });
