<template>
  <div class="container">
    <h1>Próximos shows</h1>
    <div class="container_shows">
      <table>
        <tr v-for="show of shows" :key="show.id">
          <th>{{ show.nameFestival }}</th>
          <td>{{ show.local }} | {{ show.date }}</td>
        </tr>
      </table>
    </div>
    <img
      class="last_img"
      :src="require('./../../public/img/euSouPQNosSomos.jpg')"
    />
  </div>
</template>

<script>
export default {
  name: "Diary",
  data() {
    return {
      id: 0,
      shows: [{
        id: 0,
        nameFestival: "Lethal Death Fest",
        date: "22 - Jan - 22",
        local: "Rock Experience - Lapa, RJ"
      },{
        id: 0,
        nameFestival: "Festival Transborde",
        date: "05 - Mar - 22",
        local: "Santa Cruz - RJ"
      }]
    }
  },
  created() {
    for (let show of this.shows) {
      show.id = this.id;
      this.id++;
    }
  }
};
</script>

<style scoped>
.container {
  background-color: var(--color-primary);
  background-image: url("./../../public/img/skull.jpg");
}
.container_shows,
.container h1 {
  display: flex;
  justify-content: center;
  background-color: #000;
  opacity: 0.9;
}
.last_img {
  width: 100vw;
}
td,
th {
  border-bottom: 1px solid #fff;
  padding-top: 10px;
}
th {
  text-align: left;
}
td {
  text-align: right;
}
table {
  width: 90%;
  border-collapse: collapse;
}
@media (max-width: 450px) {
  .container h1 {
    padding-top: 20px;
  }
  .container_shows {
    padding: 20px 0;
    width: 100vw;
  }
  .container_shows th {
    font-size: 13px;
  }
  .container_shows td {
    font-size: 13px;
  }
}
@media (min-width: 450px) {
  .container {
    margin-bottom: -7px;
  }
  .container_shows {
    width: 100vw;
    padding: 30px 0;
  }
}
</style>
