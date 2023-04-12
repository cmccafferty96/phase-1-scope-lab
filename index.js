// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'bob sucks'


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// my original thought process was to create the function
// upperCaseCustomerName() {
//    and within the function, return customerName.toUpperCase();
//}


// Write a function that when called, declares a variable called 
// bestCustomer in global scope and assigns it to be 'not bob'


function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'keon'
}
