<script>
  import Header from '../components/Header.svelte';
  import InfoBar from '../components/InfoBar.svelte';
  import Menu from '../components/Menu.svelte';
  import AddressMap from './AddressMap.svelte';
  import GiftsList from './GiftsList.svelte';
  import Title from '../components/Title.svelte';
  import { MENU_GIFTS, MENU_ATTENDANCE, MENU_MAP } from '../utils/constants';

  const menus = [
    { label: MENU_GIFTS, icon: 'card_giftcard', component: GiftsList },
    { label: MENU_ATTENDANCE, icon: 'verified', component: Title },
    { label: MENU_MAP, icon: 'place', component: AddressMap },
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
