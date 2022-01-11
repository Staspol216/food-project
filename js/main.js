// filter 

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
})

// every/some

const some = [4, '', 'sdfsfsf'];

console.log(some.some(item => typeof (item) === 'number')); // true

console.log(some.every(item => typeof (item) === 'number')); // false 


// reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res)

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);

// console.log(newArr);
// [
//   [ 'ivan', 'persone' ],
//   [ 'ann', 'persone' ],
//   [ 'dog', 'animal' ],
//   [ 'cat', 'animal' ]
// ]

// const newArr = Object.entries(obj).filter(item => item[1] === 'persone');

// console.log(newArr);
// [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]

// const newArr = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0]);

// console.log(newArr);

// [ 'ivan', 'ann' ]