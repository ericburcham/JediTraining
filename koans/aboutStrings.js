/**
 * Created by Eric Burcham on 6/7/2014.
 */
describe('Given a string literal stored in a variable', function () {
    it('it should have a type of String', function () {
        var a = 'a';
        var TODO = typeof(a);
        expect(TODO).toBe('string');
    });
});

describe('Given a string of length 10', function() {
    it('you can verify its length', function(){
        var a = "0123456789";
        var toDo = a.length;
        expect(toDo).toBe(10);
    });
});

describe('Given a string that actually consists of a sequence of characters', function() {
    it('should be possible to substitute individual characters in the string by indexing into it', function() {
        // In JavaScript, there is no 'char' type.  Strings are not just arrays of characters.
        // Also, strings are immutable, so you cannot just write to a string by index.
        // However, you can READ from strings by index.
        var toDo = 'let';
        toDo[0] = 'g';

        expect(toDo).toBe('let');
        expect(toDo[0]).toBe('l');
    });
});

describe('Given a string and an integer', function(){
   it('adding them together results in the output consisting of the value of the string and the string representation of the integer', function(){
       var a = 2;
       var b = '2';
       var toDo = a + b;

       expect(toDo).toBe('22');
   });
});

// string composition via appending
describe('Given two distinct string values', function() {
    it('should combine the two, in order, when they are added with the binary + operator', function () {
        var foo = 'foo';
        var bar = 'bar';

        var toDo = foo + bar;
        expect(toDo).toBe('foobar');
    });
});

// string split operations
describe('Given a string with a separator character in the middle', function(){
   it('should be able to split it into two or more strings', function(){
       var fooBar = 'foo,bar';
       var toDo = fooBar.split(',');
       var toDo1 = toDo[0],
           toDo2 = toDo[1];

       expect(toDo1).toEqual('foo');
       expect(toDo2).toEqual('bar');
   });
});

describe('Given a string that should be split with multiple separator tokens', function() {
    it('should be able specify a regular expression to split on', function() {
        var input = 'foo,bar;baz';
        var toDo = input.split(/[,;]+/);
        var toDo1 = toDo[0];
        var toDo2 = toDo[1];
        var toDo3 = toDo[2];

        expect(toDo1).toEqual('foo');
        expect(toDo2).toEqual('bar');
        expect(toDo3).toEqual('baz');
    });
});

// string join operations

// string indexOf operations
describe("Given a string whose second character is a comma", function(){
    it("calling indexOf(comma) should return 1", function(){
        var input = " ,";
        var toDo = input.indexOf(',');

        expect(toDo).toEqual(1);
    });
});

describe("Given a string whose content does not contain a given substring", function() {
    it("should return -1 when calling indexOf() with the substring", function() {
        var input = "some string not containing our target substring";
        var searchString = "flowers";
        var toDo = input.indexOf(searchString);

        expect(toDo).toEqual(-1);
    });
});

describe("Given a string that contains multiple instances of a given substring", function(){
   it("should return the index of the first instance of the substring", function(){
      var input = "dogs cats dogs cats ferrets rabbits dogs";
      var searchString = "dogs";
      var toDo = input.indexOf(searchString);

      expect(toDo).toEqual(0);
   });
});

// string comparisons via >, <
describe('Given two strings', function(){
    it('should be able to compare different strings with same case', function(){
        var a = 'a';
        var b = 'b';
        var toDo = a < b;

        expect(toDo).toBe(true);
    });

    it('should be able to compare two strings which differ only by case', function(){
        var a = 'a';
        var bigA = 'A';
        var toDo = a > bigA;

        expect(toDo).toBe(true);
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