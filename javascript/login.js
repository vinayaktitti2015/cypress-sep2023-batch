/**
 * JS IS a Object Based Programming Language.
 * no classes in JS
 * no OOPS concepts in JS
 */

class LoginPage {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }

  login() {
    console.log(
      "Login with given credentials:  " + this.user + "" + this.password
    );
  }

  logOut() {
    console.log(
      "Logout with given credentials:  " + this.user + "" + this.password
    );
  }

  signUp() {
    console.log(
      "Register with given credentials:  " + this.user + "" + this.password
    );
  }
}

const loginPage = new LoginPage("admin", "<PASSWORD>");
loginPage.login();

loginPage.logOut();
loginPage.signUp();
