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
})