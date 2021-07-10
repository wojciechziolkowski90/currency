// const interval = setInterval(() => {
//     console.log("siemano");
// }, 2000);



// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// console.log(1);
// setTimeout(()=> console.log(2));
// console.log(3);

// document.body.addEventListener("click", () => {
//     console.log("it works")
// });


// function handleClick(){
//     console.log("it works");
// }

// // document.body.addEventListener("click", handleClick);

// const box = document.querySelector('#anim');
// box.style.left="0px";


// setInterval(()=>{
//     let diff= parseInt(box.style.left);
//     console.log(diff);
//     box.style.left = diff + 1 + "px"
// }, 100);


// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//       console.log(2);
//       setTimeout(() => {
//         console.log(3);
//         setTimeout(() => {
//           console.log(4);
//           setTimeout(() => {
//             console.log(5);
//             setTimeout(() => {
//               console.log(6);
//             }, 300);
//           }, 300);
//         }, 300);
//       }, 300);
//     }, 200);
//   }, 100);


// const bill = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("ok");
//     },2000);

//     setTimeout(()=>{
//     reject("not ok");
//     },1001)
// });

// bill
//     .then((result)=>{
//     console.log(result);
//     })
//     .catch((result) =>{
//         console.log(result);
//     })
//     .finally(()=>{
//         console.log("always");
//     });

// function* gen(){
//     console.log(1)
//     yield 2
//     console.log(3)
//     yield 4
//     console.log(4)
// }

// const g=gen();

// console.log(g.next());
// console.log(g.next());


// function* gen(){
//     let i = 0;
//     while(i<10) {
//         yield i;
//         i++
//     }
// }
// const g=gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// function * gen(idx) {
//     let a=idx;
//     let b= yield a;
//     yield b +10;
// }

// const g = gen(4)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
// result.then((res) => res.json()).then((r)=> console.log(res));


// function* getFutureData() {
//     const result = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(result);
// }

// const res= getFutureData();

// res
// .next()
// .value.then((data) => data.json())
// .then((data) => res.next(data));


// async function getFutureData() {
//     const result = await fetch(
//         "https://jsonplaceholder.typicode.com/todos/1")
//     .then((r) => r.json());
//     console.log(result);
// }

// getFutureData();



// const getFuturData = async () => {
//     const result = await fetch(
//         "https://jsonplaceholder.typicode.com/todos/1")
//        .then((r) => r.json());
//         console.log(result);
// };  

// getFuturData();

// function doAwesomeThings() {
//     Promise.resolve().then(() => console.log(1));
//     setTimeout(() => console.log(2));
//     Promise.resolve().then(() => console.log(3));
//     console.log(4);
//   }
//   doAwesomeThings();
//   console.log(5);


//   # Closures
// Access to variable from outside of current scope.
// ## Example with getting access to closure
// ```js
// function sentence(city) {
//   return function fullSentence(name) {
//     return `My name is ${name} and I am from ${city}`;
//   };
// }
// const sen = sentence("Krakow");
// console.log(sen); // function declaration
// sen("Pawel");
// sen("Janusz");
// ```
// ## Example with modyfing closure
// ```js
// function gen(arr) {
//   let i = 0;
//   return function next() {
//     const result = arr[i];
//     i++;
//     return result;
//   };
// }
// const next = gen([1, 2, 3, 4]);
// console.log(next()); // 1
// console.log(next()); // 2
// ```
// ## Important things:
// - with closures we can achieve persistence like in generators
// - closures are saved in function object
// # Generators
// - lazy evaluated (computation is needed on demand)
// - really performant
// - best for manage streams (stream - data in time)
// - yield - superpower return (yield freeze generator not finish)
// - easiest way to achieve persistence
// - most popular library is rxjs (reactive extension for javascript)
// ```js
// function* gen() {
//   const a = 10;
//   const b = yield 20;
//   yield b;
// }
// // instance of generator
// const g = gen();
// // get value from generator
// g.next(); // {value: 10, done: false}
// // put value to generator
// g.next(666); // {value: 666, done: false}
// // finish generator (no more yields)
// g.next(); // {value: undefined, done: true}
// ```
// # Async/Await
// - synchronous way to write asynchronous code
// - just syntactic sugar for generators and promises
// - recommended way to write asynchronous code in js
// ## Example without async/await (generator and promise mix)
// ```js
// function* gen() {
//   const data = yield fetch("some url");
//   console.log(data);
// }
// const futureData = gen();
// const pr = futureData.next().value;
// pr.then(response => futureData.next(response));
// ```
// ## Above example with async/await
// ```js
// // asterix is async now
// async function gen() {
//   const data = await fetch("some url"); // await have to be before promise or promise based feature
//   console.log(data);
// }
// ```
