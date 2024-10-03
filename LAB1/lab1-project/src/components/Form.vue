<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    first_name: '',
                    last_name: '',
                    phone_number: ''
                }
            }
        },
        methods: {
            async submit() {
                this.$emit('submit',this.form)
                console.log(this.form)
            }
        }
    }
</script>

<template>
    <div class = "form">
        <form @submit.prevent="submit">
            <ul>
                <li>
                    <p>Email: <input type="text" required v-model="email">
                    </p>
                </li>
                <li>
                    <p> First Name: <input type="text" v-model="first_name"/> </p>
                </li>
                <li>
                    <p> Last Name: <input type="text" v-model="last_name"/> </p>
                </li>
                <li>
                    <p> Phone Number (09XX-XXX-XXXX): <input type="text" v-model="phone_number"/> </p>
                </li>
            </ul>
            <button @click="submit"> Submit </button>
        </form>
    </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>

<!-- data() {
      return {
        email: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        info_list: []
      }
    },
    methods: {
    submit_info() {
    let info = {
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number
      }
    this.shoppingList.push(info);
    this.email = null
    this.first_name= null
    this.last_name = null
    this.phone_number = null -->