describe('Not a number or NaN', function () {
    it('is a global method', function () {
        expect('function').toBe(typeof isNaN);
    });

    it('checks objects to see if they are numbers', function(){
        expect(false).toBe(isNaN(100));
        expect(true).toBe(isNaN('ABC'));
    });

    it('parses strings to see if they contain numbers', function(){
        expect(false).toBe(isNaN('100'));
        expect(false).toBe(isNaN('10.50'));
    });
});
