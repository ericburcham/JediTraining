// The value NaN indicates that a value is not a legal number.
describe('Illegal math operations evaluate to NaN', function(){
    it('Divide by zero', function(){
        var dividend = 1 / 'abc';
        var value = isNaN(dividend);

        expect(true).toBe(value);
    });

    it('Square root of a negative', function(){
        var sqrt = Math.sqrt(-4);
        var value = isNaN(sqrt);

        expect(true).toBe(value);
    });
});

describe('NaN is a value that never equals anything.  Ever.', function(){
    it('Does not equal a string', function(){
        var s = '';

        var value = s == NaN;
        expect(false).toBe(value);

        value = s === NaN;
        expect(false).toBe(value);
    });

    it('Does not equal a string', function(){
        var s = '';

        var value = s == NaN;
        expect(false).toBe(value);

        value = s === NaN;
        expect(false).toBe(value);
    });
});