describe('When a function is stored as the property of an object', function() {
   it('is called a method.', function(){
       // When a method is invoked, 'this' is bound to that object.
       var incrementer = {
           value: 0,
           increment: function (inc) {
               this.value += typeof inc === 'number' ? inc : 1;
           }
       };

       expect(incrementer.value).toBe(0);

       incrementer.increment(5);
       expect(incrementer.value).toBe(5);
   });
});

describe('When a function is not the property of an object', function(){
    it('is called a function.', function(){
        var add = function (a, b) {
            return a + b;
        };

        var sum = add(2,3);
        expect(sum).toBe(5)
    });

    it('has its this keyword bound to the global object', function(){
        // When a function is invoked with this pattern, 'this' is bound to the global object.
        // This is the source of incredible confusion.

        // We'll augment incrementer with a double method.  'double' has an inner helper function.
        // We're assigning 'this' to 'that' before calling helper functions is a common
        // workaround to avoid the 'this' confusion in.
        var add = function (a, b) {
            return a + b;
        };

        var incrementer = {
            value: 0,
            increment: function (inc) {
                this.value += typeof inc === 'number' ? inc : 1;
            }
        };

        incrementer.increment(3);
        incrementer.double = function () {
            var that = this;

            var helper = function () {
                // Fails unless there is a variable 'value' in the global object.
                // this.value = add(this.value, this.value);

                // We'll use 'that' instead.
                that.value = add(that.value, that.value);
            };

            helper();    // Invoke helper as a function.
        };


        // Invoke double as a method.
        incrementer.double();
        expect(incrementer.value).toBe(6);
    });
});

describe('When a function is intended to be invoked using the "new" keyword', function(){
    it('is called a Constructor', function(){
        // Functions that are intended to be used with the 'new' keyword are called 'constructors.'
        // By convention, they are kept in variables with a capitalized named.
        var Quo = function (status) {
            this.status = status;
        };

        // This is because if a constructor is called without the 'new' prefix, very
        // bad things can happen without a compile-time or run-time error.  So that
        // capitalization convention is VERY important.
        // The primary bad thing is that 'this' would point to the global object (function invocation pattern)
        // and you are now adding stuff to the global object.
        expect(status).toBe('');

        Quo('Foo');
        expect(status).toBe('Foo');

        // JavaScript is a prototypal inheritance language.  Objects inherit properties
        // directly from another object.  The language is class-free.

        // My favorite quote from "JavaScript: The Good Parts" by Douglas Crockford.
        // This is a RADICAL departure from current fashion.  Most languages today are classical.
        // Prototypal inheritance is powerfully expressive, but not widely understood.  JavaScript itself is not
        // confident in its prototypal nature, so it offers an object making syntax that is reminiscent of classical
        // languages.  Few classical programmers found prototypal inheritance to be acceptable, and classically
        // inspired syntax obscures the language's true prototypal nature.  This is the worst of both worlds.
        Quo.prototype.getStatus = function (  ) {
            return this.status;
        };

        // If a function is invoked with the 'new' keyword, then a new object will be created
        // with a hidden link to the value of the function's prototype member, and 'this' will be bound to
        // that new object.
        var quo = new Quo('Bar');
        expect(quo.getStatus()).toBe('Bar');
        expect(status).toBe('Foo');

        // We can protect our constructors in several ways.  This is my favorite.
        var person = function(name){
            if ( !(this instanceof arguments.callee) )
            {
                throw new Error("Constructor called as a function");
            }

            this.name = name;
        }

        expect(function() { person('Eric') } ).toThrow(new Error("Constructor called as a function"));
    });
});