'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  //first thing, empty the container
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">${mov}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const user = 'Steven Thomas Williams'; //stw
const username = user.toLowerCase();

const user1 = username.slice(0, username.indexOf(' ') + 1)[0];
console.log(user1);

const usernameArray = username.split(' ');
console.log(usernameArray);

const sigle = usernameArray.map(function (x, i) {
  // console.log(x);
  const result = x[0];
  //console.log('i: ' + i + ' and ' + result);

  return result;
});
console.log(sigle);
let finalResult = sigle.join('');
console.log(finalResult);

//Create a username for each account holder
accounts.forEach(function (x) {
  console.log(
    x.owner
      .toLowerCase()
      .split(' ')
      .map(function (y) {
        return y[0];
      })
      .join('')
  );
});

console.log(accounts);

//Calculate balance and display it 
/* const balance = account1.movements.reduce((acc, cur) => acc + cur, 0);
labelBalance.innerHTML = balance + '???'; */
//Correction: 
const calcDisplayBalance  = function (movements) {
  const balance = movements.reduce ((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const findMaximum = function (movements) {
  const max = movements.reduce((acc, curr) => acc < curr ? acc = curr : acc = acc, movements[0]);
  console.log( "Maximum is " + max);
}

findMaximum(account1.movements)

//Another way of finding the maximum 
/* const max = movements.reduce((acc, mov) => {
  if(acc > mov)
  return acc;
  else 
  return mov;
}, movements[0]);
console.log(max); */

//Let's calculate the incomes 
const caclcDisplaySummary = function (movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc,mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} Euros`;
}
caclcDisplaySummary(account1.movements);

