# Higher order functions

A higher order function
- receives function as argument (this argument is called a "callback")
- returns a function

So: "higher order function operates on functions"


```javascript
function higherOrderFunction1(callback) {
  callback(1);
}
higherOrderFunction1((n) => console.log(n));

function higherOrderFunction2() {
  return () => 1;
}
let resultFunction = higherOrderFunction2();
console.log(resultFunction());

function normalFunction(arg) {
  console.log(arg);
}
normalFunction(1);
```

Callbacks are used to let the function caller define the function's behaviour:

```javascript
function useNames(callback) {
  const names = ['Alice', 'Bob'];
  for (let name of names) {
    callback(name);
  }
}
useNames((name) => console.log(name));
useNames((name) => console.log("hello", name));
```

`Array.map` is a higher order function, we can show that by reimplementing it:

```javascript
function map(array, callback) {
  let out = [];
  for (let item of array) {
    out.push(callback(item));
  }
  return out;
}

// these are equivalent:
map([1, 2], i => i + 1);
[1, 2].map(i => i + 1);
```
