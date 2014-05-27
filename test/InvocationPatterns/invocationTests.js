describe("When using the constructor invocation pattern", function(){
  var ThisConstructor = function(){
    this.foo = 'bar';
  }
  
  var ThisConstructorThrowsThings = function(){
    if(!(this instanceof arguments.callee)){
      throw new Error("Constructor called without the new keyword");
    }
  }

  it("should return a new object", function(){
      expect(new ThisConstructor()).not.toBe(null);
      var fooType = typeof foo
      expect(fooType).toBe("undefined");
  });
  
  it("Should pollute the global namespace if called without the new keyword", function(){
    ThisConstructor();
    
    expect(foo).toBe('bar');
  })
  
  it ("Should throw an exception when called without the new keyword", function(){
    expect( function() { ThisConstructorThrowsThings(); }).toThrow(new Error("Constructor called without the new keyword"));
  });
});

describe("When using the method invocation pattern", function(){ 
  var ThisConstructor = function(){
    this.fooTwo = "What We want";
    this.foo = function(){
      return this.fooTwo;
    };
  }

  this.fooTwo = "Not What We Want";
  var target = new ThisConstructor();

  it("should scope this to the defined object", function() {
    expect(target.foo()).toBe("What We want");
  });
});

describe("When using bind", function(){
// Define the original function.
    var checkNumericRange = function (value) {
        if (typeof value !== 'number')
            return false;
        else
            return value >= this.minimum && value <= this.maximum;
    }

// The range object will become the this value in the callback function.
    var range = { minimum: 10, maximum: 20 };

// Bind the checkNumericRange function.
    var boundCheckNumericRange = checkNumericRange.bind(range);

// Use the new function to check whether 12 is in the numeric range.
    var result = boundCheckNumericRange (12);

    it("should only route to the bound object", function () {
      expect(result).toBe(true);
   });
});