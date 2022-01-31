<script>
  import Header from '../components/Header.svelte';
  import InfoBar from '../components/InfoBar.svelte';
  import Menu from '../components/Menu.svelte';
  import AddressMap from './AddressMap.svelte';
  import GiftsList from './GiftsList.svelte';
  import Title from '../components/Title.svelte';
  import { PAGES } from '../utils/constants';

  const menus = [
    { label: PAGES.GIFTS.MENU, icon: 'card_giftcard', component: GiftsList },
    { label: PAGES.ATTENDANCE.MENU, icon: 'verified', component: Title },
    { label: PAGES.MAP.MENU, icon: 'place', component: AddressMap },
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
