<script>
  import Header from '../components/Header.svelte';
  import InfoBar from '../components/InfoBar.svelte';
  import Menu from '../components/Menu.svelte';
  import AddressMap from './AddressMap.svelte';
  import GiftsList from './GiftsList.svelte';
  import Attendance from './Attendance.svelte';
  import { HOME } from '../utils/constants';

  const menus = [
    { label: HOME.GIFTS.MENU, icon: 'card_giftcard', component: GiftsList },
    { label: HOME.ATTENDANCE.MENU, icon: 'verified', component: Attendance },
    { label: HOME.MAP.MENU, icon: 'place', component: AddressMap },
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
