<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { RouterLink } from "vue-router";
import { userCounter } from "../../../models/store/user";
import router from "../../../router";

const counter = userCounter();
const formIsValid = ref(false);

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
  // isTaken: false,
});

const email = reactive({
  value: "",
  isValid: true,
  // isTaken: false,
});

const password = reactive({
  value: "",
  verify: "",
  passwordIsValid: true,
  verifyIsValid: true,
  whitespace: false,
  length: false,
  uppercase: false,
  lowercase: false,
  symbol: false,
  digit:false,
});

watch(
  () => firstname.value,
  () => {
    firstname.isValid = firstname.value !== "";
  }
)

watch(
  () => lastname.value, 
  () => {
    lastname.isValid = lastname.value !== "";
  }
)

watch(
  () => username.value,
  () => {
  // const userFound = counter.list.find((u) => u.username === username.value);
  //can change later to find the user in the backend if it exists then show the message user already exists
  username.isValid = username.value !== "";
  }
)

watch(
  () => email.value, 
  () => {
  // const emailFound = counter.list.find((e) => e.email === email.value);
  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.isValid = email.value !== "" || emailValidator.test(email.value);
  email.isValid = emailValidator.test(email.value);

  }
)

watch(
  () => password.value,
  () => {
    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /^(?=.*[a-z])/;
    const oneDigit = /^(?=.*[0-9])/;
    const length = /^.{8,16}$/;
    const oneSymbol = /^(?=.*[~!@#$%^&*()--+={}\[\]|\\:;<>,.?/_₹])/;

    password.passwordIsValid = password.value === "";
    password.digit = oneDigit.test(password.value);
    password.uppercase = upperCase.test(password.value);
    password.lowercase = lowerCase.test(password.value);
    password.length = length.test(password.value);
    password.symbol = oneSymbol.test(password.value);
    password.passwordIsValid = password.digit && password.length && password.lowercase && password.uppercase && password.symbol;
  }
)

watch(
  () => password.verify,
  () => {
    password.verifyIsValid = password.verify !== "" && (password.value === password.verify);
  }
)


 function validateForm() {
  formIsValid.value = firstname.value !== "" && lastname.value !== "" && username.value !== "" && email.value !== "" && password.value !== "";

  }

function submitForm() {
  validateForm();
  if (formIsValid.value === false) {
    firstname.isValid = false;
    lastname.isValid = false;
    username.isValid = false;
    email.isValid = false;
    // email.isTaken = false;
    password.passwordIsValid = false;
    password.verifyIsValid = false;
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
          
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <p v-if="!username.isValid" class="help is-danger">
        Username field cannot be empty
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

        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <p v-if="!password.passwordIsValid" class="help is-danger">
        Password must contain <br/> 
        <ul>
          <li v-if="!password.length">8 to 16 characters</li>
          <li v-if="!password.uppercase">at least 1 uppercase character</li>
          <li v-if="!password.lowercase">at least 1 lowercase character</li>
          <li v-if="!password.symbol">at least 1 symbol</li>
          <li v-if="!password.digit">at least 1 number</li>
        </ul>
      </p>
    </div>
    <div class="field">
      <label class="label">Verify Password</label>
      <div class="control has-icons-left">
        <input
          class="input"
          :class="password.verifyIsValid ? 'is-info' : 'is-danger'"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          v-model.trim="password.verify"

        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <p v-if="!password.verifyIsValid" class="help is-danger">
        Password does not match</p>
    </div>

    <div class="field is-grouped-centered is-horizontal">
      <p class="control">
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
