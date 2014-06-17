// co·er·cion (/kōˈərZHən,-SHən/):  The practice of persuading someone to do something by using force or threats.
// Note: While this is not an accurate definition of the mechanics of type coercion in JavaScript, it does
// convey the appropriate hostile tone you will soon associate with.

describe('Type coercion does some unexpected things in JavaScript', function(){
    it('Coerces a number to a string when adding', function(){
        expect(toDo).toBe('10.50' + 2);
        expect(toDo).toBe(2 + '10.50');
    });

    it('Coerces a string to number for the other basic math functions', function(){
        expect(toDo).toBe('10.50' - 2);
        expect(toDo).toBe(2 - '10.50');
        expect(toDo).toBe('10.50' * 2);
        expect(toDo).toBe(2 * '10.50');
        expect(toDo).toBe('10' / 2);
        expect(toDo).toBe(2 / '10');
        expect(toDo).toBe(Math.pow(2, '2'));
        expect(toDo).toBe(Math.pow('2', 2));
    });

    it('Coerces a number to boolean for if checking', function(){
        expect(toDo).toBe(true == 1);
        expect(toDo).toBe(false == 0);
    });

    it('Coerces a boolean to a number when adding to numbers', function(){
        expect(toDo).toBe(2 + false);
        expect(toDo).toBe(2 + true);
    });

    it('Coerces a boolean to a string when adding to numbers', function(){
        expect(toDo).toBe('2' + false);
        expect(toDo).toBe('2' + true);
    });

    it ('Does NOT coerce twice for addition', function(){
        expect(toDo).toBe(2 + 'false');
        expect(toDo).toBe(2 + 'true');
    });

    it ('Does coerce both sides other basic math functions', function(){
        expect(toDo).toBe('2' - false);
        expect(toDo).toBe('2' - true);
        expect(toDo).toBe('2' / false);
        expect(toDo).toBe('2' / true);
        expect(toDo).toBe('2' * false);
        expect(toDo).toBe('2' * true);

        expect(toDo).toBe(true + false);
        expect(toDo).toBe(false + true);
        expect(toDo).toBe(true - false);
        expect(toDo).toBe(false - true);
        expect(toDo).toBe(true / false);
        expect(toDo).toBe(false / true);
        expect(toDo).toBe(false * false);
        expect(toDo).toBe(false * true);
    });

    it('Coerces boolean to number for other basic math functions', function(){
        expect(toDo).toBe(false - 2);
        expect(toDo).toBe(2 - true);
        expect(toDo).toBe(true * 2);
        expect(toDo).toBe(2 * false);
        expect(toDo).toBe(true / 2);
        expect(toDo).toBe(2 / true);
        expect(toDo).toBe(Math.pow(2, true));
        expect(toDo).toBe(Math.pow(true, 2));
    });
});