// The value NaN indicates that a value is not a legal number.
describe('Illegal math operations evaluate to NaN', function(){
    it('Divide a number be a string', function(){
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
    var nan = NaN;
    it('Does not equal a string', function(){
        expect(false).toBe(nan == 'NaN');
        expect(false).toBe(nan === 'NaN');
    });

    it('Does not equal another NaN', function(){
        expect(false).toBe(nan == NaN);
        expect(false).toBe(nan === NaN);
    });

    it('Does not equal undefined', function(){
        expect(false).toBe(nan == undefined);
        expect(false).toBe(nan === undefined);
    });

    it('Does not even equal itself, seriously!!!!', function(){
        expect(false).toBe(nan == nan);
        expect(false).toBe(nan === nan);
    });

    it('can only ever, like seriously EVER, be checked by using the method isNaN()', function(){
        expect(true).toBe(isNaN(nan));
    })
});
