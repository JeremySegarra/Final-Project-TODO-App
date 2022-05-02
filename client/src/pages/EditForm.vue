<script setup lang="ts">
import { reactive, watch, ref } from "vue";
import Title from "../components/UI/Title.vue";
import router from "../router";
import { userStore } from "../models/store/user";

const store = userStore();
const formIsValid = ref(false);


const firstName = reactive({
  value: "",
  isValid: true,
});

const lastName = reactive({
  value: "",
  isValid: true,
});

const userName = reactive({
  name: "",
  isValid: true,
  isTaken: false,
  error: "Username field cannot be empty ",
});

watch(
  () => firstName.value,
  () => {
    firstName.isValid = firstName.value !== "";
  }
);

watch(
  () => lastName.value,
  () => {
    lastName.isValid = lastName.value !== "";
  }
);

watch(
  () => userName.name,
  () => {
    // const userFound = counter.list.find((u) => u.username === username.value);
    //can change later to find the user in the backend if it exists then show the message user already exists
    userName.isValid = userName.name !== "";
    userName.error = "Username field cannot be empty ";
  }
);
function validateForm() {
  formIsValid.value = firstName.value !== "" && lastName.value !== "" && userName.name !== "";

  }

function edit() {
  console.log("Im in edit");
  validateForm();
  if (formIsValid.value === false) {
    firstName.isValid = false;
    lastName.isValid = false;
    userName.isValid = false;
    return;
  }

  const userCredentials = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: userName.name,
  };

  store.editUser(userCredentials).then(() => {
    console.log("Im inside the .then");
    
    router.push("/home");
  })
  .catch((err) => {
    console.log("Im inside the .catch");
    
    console.log(err);
  });



  // router.push('/home');
}
function cancel() {
  console.log("Im in cancel");
  router.push("/home");
}
</script>

<template>
  <div class="columns is-mobile">
    <div class="column is-four-fifths is-offset-1">
      <Title>User Profile</Title>
      <Card>
        <p class="edit"><strong>Edit User</strong></p>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              :class="firstName.isValid ? 'is-info' : 'is-danger'"
              type="text"
              placeholder="Firstname"
              v-model="firstName.value"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-user-pen"></i>
            </span>
            <p v-if="!firstName.isValid" class="help is-danger">
        First name field cannot be empty
      </p>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              :class="lastName.isValid ? 'is-info' : 'is-danger'"
              type="text"
              placeholder="Lastname"
              v-model="lastName.value"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-user-pen"></i>
            </span>
            <p v-if="!lastName.isValid" class="help is-danger">
        Last name field cannot be empty
      </p>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              :class="userName.isValid ? 'is-info' : 'is-danger'"
              type="text"
              placeholder="Username"
              v-model="userName.name"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-user-pen"></i>
            </span>
            <p v-if="!userName.isValid" class="help is-danger">
        {{userName.error}}
      </p>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click="edit">Edit</button>
            <button class="button is-success space" @click="cancel">
              Cancel
            </button>
          </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.edit {
  font-size: larger;
  text-align: center;
}
.space {
  margin-left: 0.5em;
}
</style>
