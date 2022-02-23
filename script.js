// var elements = ['Hydrogen','Helium','Lithium','Beryllium'];

// var length = elements.map(element => element.length)
// console.log(length);

// var fruits=['mango','orange','lemon','banana','passion','pears'];
// console.log(fruits.pop());
// fruits;

// var total=0;
// var marks= [2,6,8,3,7,9,4];

// marks.forEach(function(mark){
//     total += mark;
// });
// console.log(total);

var namesLow=['allan', 'max', 'lex', 'lucy'];

var namesUp= namesLow.map(upperCase);

function upperCase(name){
    console.log(name.toUpperCase());
}