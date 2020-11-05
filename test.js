
const prom = new Promise((resolve, reject) => {
  resolve(1);
});

// const request = fetch("https://google.com");

prom
  .then(result => result * 2)
  .then(result => {
    if (result === 2) {
      return 3;
    } else {
      return 4;
    }
  })
  .then(result => console.log(result));

prom
  .then(result => {
    result = result * 2;
    if (result === 2) {
      return 3;
    } else {
      return 4;
    }
  })
  .then(result => console.log(result));

prom.then(result => console.log(result));



prom
  .then(result => {
    return new Promise((resolve, reject) => {
      resolve(result * 2);
    });
  })
  .then(result => console.log(result));

prom
  .then(result => {
    new Promise((resolve, reject) => {
      resolve(result * 2);
    })
      .then(result => console.log(result));
  });

fetch("...")
  .then(result => result.json())
  .then(response => {
    return fetch(response)
  })
  .then(result => result.json())
  .then(response => {
    return fetch(response)
  })

fetch("...")
  .then(response => {
    let json = result.json();
    return fetch(json.url);
  })


// When do we start chaining the .then()’s? If the promise goes inside a
// function, do we call the function and then chain the .then()? What’s the most
// practical way?

function asPromise(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
}

const twentyFour = someNum(23)
  .then(num => num + 1);
twentyFour.then(num => console.log(num));

const three = someNum(2)
  .then(num => num + 1);
three.then(num => console.log(num));

//================

function asPromiseAndAddOne(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  })
    .then(num => num + 1);
}

const twentyFour = someNum(23);
twentyFour.then(num => console.log(num));

const three = someNum(2);
three.then(num => console.log(num));









// Could we use Promise.all to chain requests to different paths of API and use
// the response we get in different functions?

const repositories = fetch("https://api.github.com/orgs/HackYourFuture/repos?per_page=100");
const contributors = fetch(`https://api.github.com/repos/HackYourFuture/${option}/contributors`);

contributors
  .then(result => {
    return Promise.all(result
      .map(contributor => fetch(`.../${contributor.avatarUrl}`)));
  })
  .then(result => result.map(avatar => parseAvatar(avatar)));




// higher order function
// - receives function as argument
// - returns a function
// "higher order function operates on functions"

// function argument passed to higher order function is a callback
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


function useNames(callback) {
  const names = ['Martijn', 'Vaida', 'Yoselyn', 'Ismail'];
  for (let name of names) {
    callback(name);
  }
}
useNames((name) => console.log(name));
useNames((name) => console.log("hello", name));

// map is a higher order function:
function map(array, callback) {
  let out = [];
  for (let item of array) {
    out.push(callback(item));
  }
  return out;
}
map([1, 2], i => i + 1);
[1, 2].map(i => i + 1);



// new file with hoisting
f90();
function f90() {
  console.log('f90');
}

x = () => console.log(5);
x();
var x;


// new file without hoisting
function f90() {
  console.log('f90');
}
f90();

var x;
x = () => console.log(5);
x();

// before all?

function requestRepositories() {
  fetch('...')
    .then(response => response.json())
    .then(repos => putReposInTable(repos));
}
// right after declaration

function putReposInTable(repos) {
  // do something
}

// at the end
requestRepositories();


// scope
const x = 5;

function foo() {
  const y = 6;
  return () => {
    console.log(y, x);
  };
}

const fooFunc = foo();

function bar() {
  const y = 7;
  fooFunc();
}

bar();


