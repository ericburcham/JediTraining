var toDo = 'abc123';

describe('Given a string literal stored in a variable', function () {
    it('it should have a type of String', function () {
        var a = 'a';
        expect('string').toBe(typeof(a));
    });
});

describe('Given a string', function() {
    it('you can verify its length', function(){
        var a = '0123456789';
        expect(10).toBe(a.length);
    });
});

describe('Given a string that actually consists of a sequence of characters', function() {
    it('should not be possible to substitute individual characters in the string by indexing into it', function() {
        // In JavaScript, there is no 'char' type.  Strings are not just arrays of characters.
        // Also, strings are immutable, so you cannot just write to a string by index.
        // However, you can READ from strings by index.
        var value = 'let';
        value[0] = 'g';

        expect('let').toBe(value);
        expect('l').toBe(value[0]);
    });
});

describe('Given a string and an integer', function(){
   it('adding them together results in the output consisting of the value of the string and the string representation of the integer', function(){
       var a = 2;
       var b = '2';
       var value = a + b;

       expect('22').toBe(value);
   });
});

describe('Given two distinct string values', function() {
    it('should combine the two, in order, when they are added with the binary + operator', function () {
        var foo = 'foo';
        var bar = 'bar';

        var value = foo + bar;
        expect('foobar').toBe(value);
    });

    it('should combine null and a string', function(){
        var foo = null;
        var bar = 'bar';
        var value = foo + bar;

        expect('nullbar').toBe(value); // WAT
    });

    it('should combine undefined and a string', function(){
        var foo;
        var bar = 'bar';
        var value = foo + bar;

        expect('undefinedbar').toBe(value); // WAT
    });
});

describe('Given a string with a separator character in the middle', function(){
   it('should be able to split it into two or more strings', function(){
       var fooBar = 'foo,bar';
       var values = fooBar.split(',');
       var value1 = values[0];
       var value2 = values[1];

       expect('foo').toEqual(value1);
       expect('bar').toEqual(value2);
   });
});

describe('Given a string that should be split with multiple separator tokens', function() {
    it('should be able specify a regular expression to split on', function() {
        var input = 'foo,bar;baz';
        var values = input.split(/[,;]+/);
        var value1 = values[0];
        var value2 = values[1];
        var value3 = values[2];

        expect('foo').toEqual(value1);
        expect('bar').toEqual(value2);
        expect('baz').toEqual(value3);
    });
});

// string join operations

// string indexOf operations
describe('Given a string which contains a comma', function(){
    it('calling indexOf(comma) should return the position of the comma', function(){
        var input = ' ,';
        var value = input.indexOf(',');

        expect(1).toEqual(value);
    });
});

describe('Given a string whose content does not contain "flowers"', function() {
    it('indexOf should indicate that "flowers" is not found.', function() {
        var input = 'some string not containing our target substring';
        var searchString = 'flowers';
        var value = input.indexOf(searchString);

        expect(-1).toEqual(value);
    });
});

describe('Given a string that contains multiple instances of a given substring', function(){
    it('should return the index of the first instance of the substring', function(){
        var input = 'dogs cats dogs cats ferrets rabbits dogs';
        var searchString = 'dogs';
        var value = input.indexOf(searchString);

        expect(0).toEqual(value);
    });
});

describe('Given a string which contains two commas', function(){
    it('we can get the position of the second comma using indexOf().', function(){
        var input = 'foo,bar,baz';
        var value = input.indexOf(',', 4);

        expect(7).toEqual(value);
    }) ;
});

// string comparisons via >, <
// NOTE:
//
// You might do this for something like sorting an array of strings
describe('Given two strings', function(){
    it('should be able to compare different strings with same case', function(){
        var value = 'abc' < 'bcd';

        expect(true).toBe(value);
    });

    it('should be able to compare two strings which differ only by case', function(){
        var value = 'abc' > 'ABC';

        expect(true).toBe(value);
    });
});

// string pattern searches via regex

// string substitution via regex


// string
// number
// function
// object
// array
// bool
// Null
// undefined