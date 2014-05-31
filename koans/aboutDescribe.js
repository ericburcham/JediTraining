/**
 * Created by Eric Burcham on 5/31/2014.
 */

/*
 * Jasmine is a BDD framework for JavaScript.  It doesn't depend on lots of stuff.  It doesn't need a DOM, Jack.
 * It also has a pretty easy syntax.  Also, I kind of know it and I'm lazy, so you guys get to use Jasmine.
 *
 * You love it.
 */

describe("A suite", function () {
    it("contains specs with expectations", function () {
        // Make this test pass.
        expect(true).toBe(true);
    });
});


// 'describe' is a function.  It generally contains setup code for all the specs in the suite.
describe("A suite is a function", function () {
    var a;

    // 'it' is also a function.  It generally contains code needed for a set of expectations.
    it("and so is a spec", function () {
        // Make this test pass.
        a = true;

        expect(a).not.toBe(undefined);
        expect(a).toBe(true);
    });
});

