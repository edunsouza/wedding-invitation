<script>
  import Header from '../components/Header.svelte';
  import Menu from '../components/Menu.svelte';

  import AddressMap from '../components/AddressMap.svelte';
  import Title from '../components/Title.svelte';

  const menus = [
    { label: 'Lista de Presentes', icon: 'card_giftcard', component: Title },
    { label: 'Confirmar Presença', icon: 'verified', component: Title },
    { label: 'Endereço', icon: 'place', component: AddressMap },
  ];
</script>

<main>
  <Header />
  <Menu items={menus} />
</main>

<style lang="scss">
  main {
    height: 100vh;
  }
</style>
