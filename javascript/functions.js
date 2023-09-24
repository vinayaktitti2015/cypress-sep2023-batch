// non-parameterized functions
function userLogin() {
  console.log("user login successful");
}

function userLogout() {
  console.log("user logout successful");
}

function userRegister() {
  console.log("user register successful");
}

// parameterized functions
function userLogin(username, password) {
  console.log("user login successful with given credentails: " + username + " " + password);
}

function userLogout(username, password) {
  console.log("user logout successful");
}

userLogin(); // no arguments
userLogout();

userLogin("admin", "admin123"); // pass the arguments to the function


// arrow functions from es6 module
const count = (a,b) => {
    return a + b;
}

console.log(count(1,2));