describe('isNaN', function () {
    it('is a global method', function () {
        expect('function').toBe(typeof isNaN);
    });

    it('checks objects to see if they are numbers', function(){
        expect(false).toBe(isNaN(100));
        expect(false).toBe(isNaN(1.00e2));
        expect(false).toBe(isNaN(10.5));
        expect(true).toBe(isNaN('ABC'));
    });

    it('parses strings to see if they contain numbers', function(){
        expect(false).toBe(isNaN('100'));
        expect(false).toBe(isNaN('1.00e2'));
        expect(false).toBe(isNaN('10.50'));
    });

    it('does not parse functions express as a string', function(){
        expect(true).toBe(isNaN('100 + 100'));
    });

    it('considers boolean values to be numeric', function(){
        expect(false).toBe(isNaN(false));
        expect(false).toBe(isNaN(true));
    });
});
