// DOM : Document Object Model

// D : Document  : File  (HTML)
// O : Object    :  key+value pair 
// M : Model     : Structure

// console.log("Hello");


// How to Access HTML Code Using JS : 
// console.log(document);   // html tag 


// How to Access Body/Head Using JS : 
// console.log(document.head);
// console.log(document.body);


// ----------------------------------------------
// How to Access HTML Element Using JS : 

// 1. using Id : 
console.log(document.getElementById('id1'));

// 2. using Class : 
console.log(document.getElementsByClassName('class1'));
console.log(document.getElementsByClassName('class1')[2]);

// 3. using TagName : 
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('h2')[1]);

// 4. Using queryselector
// console.log(document.querySelector('h2'));

// console.log(document.querySelector('.class1'));
// console.log(document.querySelector('p.class1'));
// console.log(document.querySelector('#id1'));

// 5. Using queryselectorAll
console.log(document.querySelectorAll('h2'));
console.log(document.querySelectorAll('h2')[1]);
console.log(document.querySelectorAll('.class1'));
console.log(document.querySelectorAll('.class1')[2]);