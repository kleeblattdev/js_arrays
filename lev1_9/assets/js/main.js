const lotto = [23, 54, 75];
const badNum = [];

console.log(lotto);


// push adds elements to the end 
lotto.push(17, 8, 32, 60, 44);
console.log(lotto);

//unshift adds elements at the beginning
lotto.unshift(18, 33, 2, 15, 20);
console.log(lotto);

//pop removes elements from the end
badNum.push(lotto.pop());
badNum.push(lotto.pop());

console.log(lotto);

//shift() removes elements at the beginning
badNum.push(lotto.shift());
badNum.push(lotto.shift());

console.log(lotto);