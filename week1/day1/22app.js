var firstName = 'Jane';

(function greeting(lastName) {
    var firstName = 'John';
    console.log(firstName)
    console.log(lastName)
}('Doe'));

console.log(firstName);
