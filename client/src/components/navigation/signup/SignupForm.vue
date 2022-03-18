<script setup lang="ts">
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import { userCounter } from "../../../models/store/user";
import router from "../../../router";

const counter = userCounter();
const formIsValid = ref(true);

const firstname = reactive({
  value: "",
  isValid: true,
});

const lastname = reactive({
  value: "",
  isValid: true,
});

const username = reactive({
  value: "",
  isValid: true,
  isTaken: false,
});
const email = reactive({
  value: "",
  isValid: true,
  isTaken: false,
});
const password = reactive({
  value: "",
  verify: "",
  passwordIsValid: true,
  verifyIsValid: true,
});

function validateFirstName() {
  formIsValid.value = true;
  firstname.isValid = true;
  if (firstname.value === "") {
    firstname.isValid = false;
    formIsValid.value = false;
  }
}
function validateLastName() {
  formIsValid.value = true;
  lastname.isValid = true;
  if (lastname.value === "") {
    lastname.isValid = false;
    formIsValid.value = false;
  }
}
function validateUsername() {
  formIsValid.value = true;
  username.isValid = true;
  const userFound = counter.list.find((u) => u.username === username.value);
  if (username.value === "") {
    username.isValid = false;
    formIsValid.value = false;
  }
  //if we did find the username in the list we cannot add this new username (Unique)
  if (userFound !== undefined) {
    formIsValid.value = false;
    username.isValid = false;
  } 

}
function validateEmail() {
  formIsValid.value = true;
  email.isValid = true;
  const emailFound = counter.list.find((e) => e.email === email.value);
  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value === "") {
    email.isValid = false;
    formIsValid.value = false;
  }
  //if we did find the email in the list we cannot add this new email (Unique)
  if (emailFound !== undefined) {
    formIsValid.value = false;
    email.isValid = false;
  }
  if (emailValidator.test(email.value) === false) {
    formIsValid.value = false;
    email.isValid = false;
  }
}
function validatePassword() {
  
  formIsValid.value = true;
  password.passwordIsValid = true;

  const whiteSpace = /[ ]+/gm;
  const upperCase = /(?=.*[A-Z])/;
  const lowerCase = /^(?=.*[a-z])/;
  const oneDigit = /^(?=.*[0-9])/;
  const length = /^.{10,16}$/;
  const oneSymbol = /^(?=.*[~!@#$%^&*()--+={}\[\]|\\:;<>,.?/_₹])/;
  // const passwordValidator =
  //   /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

  if (password.value === "") {
    password.passwordIsValid = false;
    formIsValid.value = false;
  }
  
  //if the password does not contain 1 uppercase/lowercase/symbol/number/10-16characters length/no white spaces
  // if (passwordValidator.test(password.value) === false) 
  // {
  //   formIsValid.value = false;
  //   password.passwordIsValid = false;
  // }
}
function validatePasswordVerify() {
  formIsValid.value = true;
  password.verifyIsValid = true;


  if (password.verify === "") {
    password.verifyIsValid = false;
    formIsValid.value = false;
  }

  // if the password and verify password do not match the form is invalid
  if(password.value !== password.verify){
    formIsValid.value = false;
    password.verifyIsValid = false;

  }
}


// function validateForm() {
//   console.log("This is password firing keydown");
  
//   //reset to true so user can re enter correct values
//   formIsValid.value = true;
//   firstname.isValid = true;
//   lastname.isValid = true;
//   username.isValid = true;
//   email.isValid = true;
//   password.passwordIsValid = true;
//   password.verifyIsValid = true;

//   //search the users lists to see if a username or email already exists, they must be unique
//   const userFound = counter.list.find((u) => u.username === username.value);
//   const emailFound = counter.list.find((e) => e.email === email.value);

//   //Regular expressions for basic password/email validation
//   const passwordValidator =
//     /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
//   const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   //If the input fields are left empty
//   if (firstname.value === "") {
//     firstname.isValid = false;
//     formIsValid.value = false;

    
//   }

  
//   if (lastname.value === "") {
//     lastname.isValid = false;
//     formIsValid.value = false;
//   }
//   if (username.value === "") {
//     username.isValid = false;
//     formIsValid.value = false;
//   }
//   if (email.value === "") {
//     email.isValid = false;
//     formIsValid.value = false;
//   }
//   if (password.value === "") {
//     password.passwordIsValid = false;
//     formIsValid.value = false;
//   }
//   if (password.verify === "") {
//     password.verifyIsValid = false;
//     formIsValid.value = false;
//   }

//   //if we did find the username in the list we cannot add this new username (Unique)
//   if (userFound !== undefined) {
//     formIsValid.value = false;
//     username.isValid = false;
//   }
//   //if we did find the email in the list we cannot add this new email (Unique)
//   if (emailFound !== undefined) {
//     formIsValid.value = false;
//     email.isValid = false;
//   }

//   if (emailValidator.test(email.value) === false) {
//     formIsValid.value = false;
//     email.isValid = false;
//   }
//   if (
//     passwordValidator.test(password.value) === false &&
//     password.value !== password.verify
//   ) {
//     //if the password does not contain 1 uppercase/lowercase/symbol/number/10-16characters length/no white spaces
//     // if the password and verify password do not match the form is invalid
//     formIsValid.value = false;
//     password.verifyIsValid = false;
//     password.passwordIsValid = false;
//   }
// }

function submitForm() {
  validateFirstName();
  validateLastName();
  validateUsername();
  if (formIsValid.value === false) {
    return;
  }

  counter.setNewUser(
    firstname.value,
    lastname.value,
    username.value,
    email.value,
    password.value,
    password.verify,
    counter.$state.counter
  );

  router.push("/");
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">First Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          :class="firstname.isValid ? 'is-info' : 'is-danger'"
          type="text"
          placeholder="first name"
          v-model.trim="firstname.value"
          @keyup="validateFirstName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <p v-if="!firstname.isValid" class="help is-danger">
        First name field cannot be empty
      </p>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          :class="lastname.isValid ? 'is-info' : 'is-danger'"
          type="text"
          placeholder="last name"
          v-model.trim="lastname.value"
          @keyup="validateLastName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <p v-if="!lastname.isValid" class="help is-danger">
        Last name field cannot be empty
      </p>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          :class="username.isValid ? 'is-info' : 'is-danger'"
          type="text"
          placeholder="Enter a username"
          v-model.trim="username.value"
          @keyup="validateUsername"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
      </div>
      <p v-if="!username.isValid" class="help is-danger">
        This username is unavailable please choose a different one
      </p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          :class="email.isValid ? 'is-info' : 'is-danger'"
          type="email"
          placeholder="Enter your email"
          v-model.trim="email.value"
          @blur="validateEmail"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <!-- <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span> -->
      </div>
      <p v-if="!email.isValid" class="help is-danger">
        Please enter a valid email
      </p>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input
          class="input"
          :class="password.passwordIsValid ? 'is-info' : 'is-danger'"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          v-model.trim="password.value"
          @keyup="validatePassword"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <p v-if="!password.passwordIsValid" class="help is-danger">
        Password must contain <br/> 
        <ul>
          <li>no whitespace</li>
          <li>10 to 16 characters</li>
          <li>at least 1 uppercase character</li>
          <li>at least 1 lowercase character</li>
          <li>at least 1 symbol</li>
          <li>at least 1 number</li>
        </ul>
      </p>
    </div>
    <div class="field">
      <label class="label">Verify Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="password.verifyIsValid ? 'is-info' : 'is-danger'"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          v-model.trim="password.verify"
          @blur="validatePasswordVerify"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field is-grouped-centered is-horizontal">
      <p class="control">
        <!-- <RouterLink
          class="button is-primary"
          to="/"
          @click="counter.setNewUser(counter.$state.counter, username.value)"
        >
          Submit
        </RouterLink> -->
        <button class="button is-info" type="submit">Submit</button>
      </p>
      <p class="control">
        <RouterLink class="button is-light" to="/"> Cancel </RouterLink>
      </p>
    </div>
  </form>
</template>

<style scoped>
.button {
  margin: 0.25em;
}
</style>
