<template>
  <div class="container">
    <h1>Próximos shows</h1>
    <div class="container_shows">
      <table>
        <tr>
          <th>Lethal Death Fest</th>
          <td>Rock Experience - Lapa, RJ</td>
        </tr>
        <tr>
          <th>Festival Transborde</th>
          <td>Santa Cruz, RJ</td>
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
export default {};
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
    text-align: start;
  }
  .container_shows td {
    text-align: center;
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
