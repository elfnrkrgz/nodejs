const crypto = require("crypto");

const start = Date.now()

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('1- ', Date.now() - start)

})

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('2- ', Date.now() - start)

})

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('3- ', Date.now() - start)

})

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('4- ', Date.now() - start)

})

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('5- ', Date.now() - start)

})

crypto.pbkdf2('3434abc', '5', 1000000, 64, 'sha512', () => {

    console.log('6- ', Date.now() - start)

})