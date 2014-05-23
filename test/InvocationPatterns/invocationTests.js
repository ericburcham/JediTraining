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
  
  it("Should polute the global namespace if called without the new keyword", function(){
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
    var ThisConstructor = function(){
        this.fooTwo = "What We want";
        this.foo = function(){
            return this.fooTwo;
        };
    }

    var target = new ThisConstructor();
    var target2 = new ThisConstructor();
    target2.fooTwo = "Something terribly wrong";

    it("should only route to the bound object", function () {
      expect(target2.foo.bind(target)()).toBe(target.foo());
   });
});