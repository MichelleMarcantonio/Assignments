//ES5 Global Constants


var PI = 3.14;
PI = 42; // stop me from doing this!

//ES2015 Global Constants
let PI = 3.14;
PI = 42;

//Write an ES2015 Version

//Quiz

//- What is the difference between var and let?
    //Var can be reassigned, redefined, and Mutated.
    //var will hoist to the top of the scope it is defined in
    //Let can be reassigned and mutated, but not redefined
    //Const can be mutated, but can not be reassigned or redefined

//- What is the difference between var and const?
    //Var can be reassigned, redefined, and mutated, whereas const
    //can only be mutated. 

//- What is the difference between let and const?
    //The let keyword creates a block-scoped variable: a variable that only exists inside a code block.


//- What is hoisting?
    //It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using ***var***, you can access the variable name and it’s undefined value before it is used later on.
    //Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.