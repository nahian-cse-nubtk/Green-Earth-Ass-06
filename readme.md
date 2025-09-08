**1) What is the difference between var, let,and const?**

**Ans:**

JavaScriptprovides three ways to declare variables: var, let, and const, but they differ in scope, hoisting behaviour, and re-assignment rules.

**var:** Declares variables with function or global scope and allows re-declaration and updates within the same scope.

**let:** Declares variables with block scope, allowing updates but not re-declaration within the same block.

**const**: Declares block-scoped variables that cannot be reassigned after their initial assignment.

**2) What is the difference between map(), forEach(), and filter()?**

**Ans:**

The forEach() and map() methods in JavaScript are used to iterate over arrays, but they serve different purposes. **forEach()** executes a provided function once for each array element without returning a new array, while **map()** transforms elements and returns a new array.

**3) What are arrow functions in ES6?**

**Ans:**

An arrow function is a shorter syntax for writing functions in JavaScript. Introduced in ES6, arrow functions allow for a more concise and readable code, especially in cases of small functions. Unlike regular functions, arrow functions don't have their own this,but instead, inherit it from the surrounding context.

Arrow functions use => for a compact syntax.

They inherit this from the surrounding context.

Single-expression functions have an implicit return.

They don’t have access to the arguments object.

Best to declare with const, unless reassignment is needed.

**4) How does destructuring assignment work in ES6?**

**Ans:**

Destructuring in JavaScript allows you to extract values fromarrays or objects and assign them to variables in a concise and readable way. It simplifies code, making it shorter and easier to understand.

**Destructuring works as:**

**Array Destructuring**: It lets you easily grab values from an arrayand assign them to variables, instead of using the array's index.

**Object Destructuring**: This helps you pick properties from anobject and store them in variables, making your code easier to read and understand.

**Default Values**: we can set a backup value for variables while destructuring. If something is missing or undefined, the default will be used instead.

**Skipping Items**: In arrays, we can choose to ignore certain values while destructuring, focusing only on the ones you need.

**Nested Destructuring**: It helps us pull values from objects orarrays within other objects or arrays, all in one go, making the code shorter and more efficient.

**5) Explain template literals in ES6. How are they different from string concatenation?**

**Ans:**

Template literals are string literals that allow embedded expressions (variables) into our code. They are enclosed by **backticks (\`)** instead of **single (')** or **double (")** quotes.

It was introduced in ES6, which provides a more flexible and readable way to work with strings. Unlike traditional string concatenation, template literals simplify the process of embedding expressions, multi-line strings, and variable interpolation.

**Difference between concatenated strings and template literals:**

Unlike concatenated strings, we can slot expressions directly into template literals, meaning that we can effortlessly pull values into our string. If we use **${** and **}** to enclose the name of a variable, and that variable's value will be spliced into our string.