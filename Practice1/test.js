//Behvaiour Driven Development, used for testing

//split into three parts, describe, it, and assert



describe("pow", function() //Describe is used to group the workers (it) parts of the code. Here we are describing the "pow" function
{
    

describe("raises x to power n", function() //describes can be nested
{
    
    function makeTest(x)
    {
        let expected = x * x * x;
        it(`${x} to the power 3 is ${expected}`, function() //the it section describes a particular test case in a human-readable way, and also gives the function that is used
        {                                                   //to test that case

            assert.equal(pow(x, 3), expected);  //the code inside an it block should execute without errors if the implementation is correct. The assert functions are used to
                                                // check whether the function works as expected.
        });
    }

    for (let x = 1; x <= 5; x++) //run the makeTest function multiple times to check the numbers 1 to 5 against the power of 3
    {
        makeTest(x); 
    } 
});



describe("returns NaN for non-valid powers", function()
{
    
it("for negative n the result is NaN", function()
{
    assert.isNaN(pow(2, -1));
});

it("for non-integer n the result is NaN", function() 
{
    assert.isNaN(pow(2, 1.5));
});

});


});

//The before/after functions can be used to execute things before or after running tests.
 
 // before(() => alert("Testing started – before all tests"));
 // after(() => alert("Testing finished – after all tests"));
  
//The beforeach/aftereach functions be be used to execute things before/after every "it".

 // beforeEach(() => alert("Before a test – enter a test"));
 // afterEach(() => alert("After a test – exit a test"));

   



