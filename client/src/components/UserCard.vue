<script setup lang="ts">
//also need to get the props from the parent component meaning both lists

async function addFriend() {
  //This function is going to remove the user from the logged in users Request list and add them to their Friends List in the Database
  //we need to send the data and update the database
}
async function removeRequest() {
  //This function is going to remove the user from the logged in users Request list and from the database
  //we need to send the data and update the database
}
</script>

<template>
  <div class="control">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-120x120">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-right">
          <!-- This will be the username field -->
          <p class="title is-4">Jeremypro</p>
          <hr />
          <!-- This is the email field -->
          <p class="subtitle is-6">jeremy@gmail.com</p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="addFriend"
      >
        Add
      </button>
      <button
        href="#"
        class="card-footer-item button is-danger"
        @click="removeRequest"
      >
        Remove
      </button>
    </footer>
  </div>
</template>

<style scoped>
.card-content,
footer {
  background-color: #aed6f1;
}
.control {
  margin-bottom: 1em;
}

a {
  color: black;
}
</style>
