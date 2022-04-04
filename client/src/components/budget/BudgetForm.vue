<script setup lang="ts">
import { budgetStore } from "../../models/store/budget";
import { ref, reactive } from "vue";
import Card from "../UI/Card.vue";
import BudgetList from "./BudgetList.vue";
import { Items, list } from "../../models/itemList";

const store = budgetStore();
const amount = ref("");
const description = ref("");
const itemAmount = ref("");
const toggleAddForm = ref(false);

const itemsList = reactive(list);

function toggle() {
  toggleAddForm.value = !toggleAddForm.value;
}

function addAmount() {
  store.addAmount(+amount.value);
  amount.value = "";
}

function addItem() {
  list.push({
    description: description.value,
    amount: +itemAmount.value,
    id: list.length,
  });
  console.log(list);

  itemAmount.value = "";
  description.value = "";
}

function removeAmount() {
  store.removeAmount(+amount.value);
  amount.value = "";
}
</script>

<template>
  <div class="columns is-mobile">
    <div class="column">
      <Card class="balance">
        <p>
          Balance
          <i class="fa-solid fa-dollar-sign"
            ><span>{{ store.$state.budget }}</span></i
          >
        </p>
        <div class="field has-addons funds">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Amount of money"
              v-model="amount"
            />
          </p>
        </div>
        <a class="button" @click="addAmount"> Add Funds </a>
        <a class="button" @click="removeAmount"> Remove Funds </a>
        <a class="button" @click="toggle"> Add New Item </a>
      </Card>
      <Card v-if="toggleAddForm" class="balance">
        <div class="field">
          <p>New Item</p>
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Amount"
              v-model="itemAmount"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-dollar-sign"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Item"
              v-model="description"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </p>
        </div>

        <p class="control">
          <a class="button" @click="addItem"> Add</a>
        </p>
      </Card>
      <BudgetList
        v-for="(item, index) in itemsList"
        :desc="item.description"
        :item="item.amount"
        :index="index"
      ></BudgetList>
    </div>
  </div>
</template>

<style scoped>
.balance {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.funds {
  justify-content: center;
}
</style>
