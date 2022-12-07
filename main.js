function arg() {
    return arguments.length;
}

let num = arg(10, 5, 23, 7);
console.log('к-ть аргументів '+num);


function equal(a,b) {
    if(a<b) {
        return -1;
    }
    else if(a>b) {
        return 1;
    } 
    else {
        return 0;
    }

}

let num1 = prompt('what number?');
let num2 = prompt('what two number?');

let result = equal(num1,num2);
console.log(result);


function factorial(n) {
if(n==1) {
    return 1;
} 
return n*factorial(n-1);
}

let fact = factorial(6);
console.log('факторіал ' +fact);

function number(a,b,c) {
    return a+''+b+''+c;
}

let res = number(1,2,3);
console.log(res);

function rec (width,height) {
    if(height==0) {
        return width*width;
    }
    
    return width*height;
}

let wid = prompt('Яка довжина?');
let hei = prompt('Яка ширина?');
let square = rec(wid,hei);
console.log('Площа ' +square);
