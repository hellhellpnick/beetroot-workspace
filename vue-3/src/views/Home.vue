<template>
  <div>
    <ul>
      <li v-for="pizza in pizzas" :key="pizza.id">
        <img :src="pizza.image" :alt="pizza.name" />
        <h3>{{pizza.name}}</h3>
        <span>{{pizza.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import cheerio from "cheerio";

export default {
  name: "Home",
  data() {
    return {
      pizzas: []
    };
  },
  methods: {
    async getHTML() {
      try {
        const res = await fetch(
          "https://cors-anywhere.herokuapp.com/https://grill-wine.com/menu/pizza/"
        );
        const data = await res.text();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async parseHTML() {
      const html = await this.getHTML();
      const pizzas = cheerio("li.product", html).map((idx, el) => {
        return {
          id: String(idx + 1),
          name: String(cheerio("h3.product-title a", el).text()).trim(),
          image: cheerio("img.wp-post-image", el).attr("src"),
          price: cheerio("span.amount", el).text()
        };
      });
      const result = Object.values(pizzas).map(value => value);
      this.pizzas = [...result];
      console.log(result);
    }
  },
  created() {
    this.parseHTML();
  }
};
</script>