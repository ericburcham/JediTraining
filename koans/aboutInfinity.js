describe('Infinity is a special value woot!', function(){
    it('Dividing by zero results in infinity', function(){
        var dividend = 1 / 0;

        expect(Infinity).toBe(dividend);
    });

    it('Is a number', function(){
        expect(false).toBe(isNaN(Infinity));
    });
});
