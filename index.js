/*
    GLORY BE TO GOD,
    Javascript Variable Scopes,
    By Israel Mafabi Emmanuel
*/

var customerName = "bob";
var bestCustomer = undefined;
const leastFavoriteCustomer = "Gwen";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Wendy";
}