// co·er·cion (/kōˈərZHən,-SHən/):  The practice of persuading someone to do something by using force or threats.
// Note: While this is not an accurate definition of the mechanics of type coercion in JavaScript, it does
// convey the appropriate hostile tone you will soon associate with.

describe('Type coercion does some unexpected things in JavaScript', function(){
    it('Coerces a number to a string when adding', function(){
        expect('10.502').toBe('10.50' + 2);
        expect('210.50').toBe(2 + '10.50');
    });

    it('Coerces a string to number for the other basic math functions', function(){
        expect(8.5).toBe('10.50' - 2);
        expect(-8.5).toBe(2 - '10.50');
        expect(21).toBe('10.50' * 2);
        expect(21).toBe(2 * '10.50');
        expect(5).toBe('10' / 2);
        expect(0.2).toBe(2 / '10');
        expect(4).toBe(Math.pow(2, '2'));
        expect(4).toBe(Math.pow('2', 2));
    });

    it('Coerces a number to boolean for if checking', function(){
        expect(true).toBe(true == 1);
        expect(true).toBe(false == 0);
    });

    it('Coerces a boolean to a number when adding to numbers', function(){
        expect(2).toBe(2 + false);
        expect(3).toBe(2 + true);
    });

    it('Coerces a boolean to a string when adding to strings', function(){
        expect('2false').toBe('2' + false);
        expect('2true').toBe('2' + true);
    });

    it ('Does NOT coerce twice for addition', function(){
        expect('2false').toBe(2 + 'false');
        expect('2true').toBe(2 + 'true');
    });

    it ('Does coerce both sides other basic math functions', function(){
        expect(2).toBe('2' - false);
        expect(1).toBe('2' - true);
        expect(Infinity).toBe('2' / false);
        expect(2).toBe('2' / true);
        expect(0).toBe('2' * false);
        expect(2).toBe('2' * true);

        expect(1).toBe(true + false);
        expect(1).toBe(false + true);
        expect(1).toBe(true - false);
        expect(-1).toBe(false - true);
        expect(Infinity).toBe(true / false);
        expect(0).toBe(false / true);
        expect(0).toBe(false * false);
        expect(0).toBe(false * true);
    });

    it('Coerces boolean to number for other basic math functions', function(){
        expect(-2).toBe(false - 2);
        expect(1).toBe(2 - true);
        expect(2).toBe(true * 2);
        expect(0).toBe(2 * false);
        expect(0.5).toBe(true / 2);
        expect(2).toBe(2 / true);
        expect(2).toBe(Math.pow(2, true));
        expect(1).toBe(Math.pow(true, 2));
    });
});