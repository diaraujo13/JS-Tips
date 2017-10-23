# JS Tips
_An amateur roadmap learning throughout the language_


Let' get started!

### **.map() plus built-in JavaScript methods**
This could look obvious, since you can call an user-made function to 'separation of concerns', but this wasn't obvious to me at first. You can make use of any javascript pre-built functions to enhance Array.prototype.map function! This came to help me in a lot of different situations, being the most common the snippet below:

```js{

//String Array to Number Array 
let arr = '1 2 3 4 5'.split(' ').map(Number);

> [1,2,3,4,5]
```
