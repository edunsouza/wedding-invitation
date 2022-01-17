<script>
  import Header from '../components/Header.svelte';
  import InfoBar from '../components/InfoBar.svelte';
  import Menu from '../components/Menu.svelte';

  import AddressMap from '../components/AddressMap.svelte';
  import GiftsList from '../components/GiftsList.svelte';
  import Title from '../components/Title.svelte';

  const menus = [
    { label: 'Lista de Presentes', icon: 'card_giftcard', component: GiftsList },
    { label: 'Confirmar Presença', icon: 'verified', component: Title },
    { label: 'Mapa', icon: 'place', component: AddressMap },
  ];
</script>

<main>
  <Header />
  <InfoBar />
  <Menu items={menus} />
</main>

<style lang="scss">
  main {
    height: 100vh;
  }
</style>
