<template>
  <div>
    <!-- v-if muestra según la condición que pongamos -->
    <div v-if="showName">Hola, soy {{ fullName | uppercase }}</div>
    <!-- v-for itera arrays | sintáxis: variable in array -->
    <ListItem />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import ListItem from "./ListItem/ListItem";

export default {
  name: "HelloWorld",
  components: {
    ListItem
  },
  data: () => ({
    name: "Alex",
    surname: "Copero",
    showName: false,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8]
  }),
  computed: {
    fullName() {
      return `${this.name} ${this.surname}`;
    }
  },
  props: {
    msg: {
      type: String,
      required: false,
      default: "Hola, Vue"
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    changeShowName() {
      this.showName = !this.showName;
    }
  }
};
</script>

<style></style>
