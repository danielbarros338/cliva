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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: var(--color-primary);
}
@media (max-width: 450px) {
  .container_shows {
    margin-top: 20px;
  }
  .container_shows,
  .container_shows table {
    width: 100vw;
  }
  .container_shows th{
    text-align: start;
  }
  .container_shows td {
    text-align: center;
  }
}
</style>
