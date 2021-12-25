<script>
  import { capitalize } from "./utils/string";

  export let guest;

  const names = guest?.split("-").map(capitalize).join(" & ");
</script>

<section>
  <h1>Os noivos <i>Eduardo e Camila</i> convidam</h1>
  <h2>{names}</h2>
  <h1>para o seu casamento!</h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #7c5b4f;
  }
  h2 {
    transform: skew(-20deg);
    background: #68473b;
    color: #e3e2dc;
    padding: 0 20px;
  }
</style>
