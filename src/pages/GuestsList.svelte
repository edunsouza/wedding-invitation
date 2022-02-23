<script>
  import { onMount } from 'svelte';

  import { getToken, setToken } from '../utils/auth';
  import { GUESTS_LIST } from '../utils/constants';
  import { list as listAttendance, access } from '../services/attendance';
  import Title from './../components/Title.svelte';
  import Label from './../components/Label.svelte';
  import Input from './../components/TextInput.svelte';
  import Button from './../components/Button.svelte';

  const { TITLE, NAME, STATUS, YES, NO, LOADING, PASSWORD, CONFIRM } =
    GUESTS_LIST;
  let loading = false;
  let error = null;
  let list = [];
  let needsPassword = false;
  let password = null;

  const load = () => (loading = true);
  const unload = () => (loading = false);
  const setError = (e) => (error = e);

  const authenticate = async () => {
    try {
      load();
      const response = await access('website', password);

      if (response.error) {
        throw response.message;
      }

      needsPassword = false;
      unload();
      setToken(response.token);
      return response.token;
    } catch (e) {
      setError(e);
      unload();
    }
  };

  const fetchList = async (token) => {
    try {
      load();
      const { items = [] } = await listAttendance({ token });
      list = items.map((i) => ({
        ...i,
        attending: i.attending ? YES : NO,
        attendee: i.key.replace(/-/gi, ' '),
      }));
    } catch (e) {
      setError(e);
    } finally {
      unload();
    }
  };

  const handleAuth = async () => {
    const token = await authenticate();
    if (token) {
      await fetchList(token);
    }
  };

  onMount(() => {
    const token = getToken();
    needsPassword = !token;
    if (token) {
      fetchList(token);
    }
  });

  $: {
    if (error) {
      alert(error);
    }
  }
</script>

<section>
  <Title value={TITLE} />
  {#if loading}
    <Label type="primary">{LOADING}</Label>
  {:else if needsPassword}
    <div>
      <Label type="primary">{PASSWORD}:</Label>
      <Input bind:value={password} mask />
      <Button onClick={handleAuth} text={CONFIRM} />
    </div>
  {:else}
    <table>
      <thead>
        <tr>
          <th> <Label type="secondary">{NAME}</Label> </th>
          <th> <Label type="secondary">{STATUS}</Label> </th>
        </tr>
      </thead>
      <tbody>
        {#each list as guest}
          <tr>
            <td> <Label type="body">{guest.attendee}</Label> </td>
            <td> <Label type="body">{guest.attending}</Label> </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :global(h1) {
      @media (max-width: $sm) {
        font-size: 40px;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      :global(h1) {
        margin-top: 40px;

        @media (max-width: $sm) {
          font-size: 28px;
        }
      }

      :global(button) {
        margin-top: 20px;
      }
    }

    table {
      width: 80%;
      display: flex;
      flex-direction: column;
      tr {
        display: flex;
        &:nth-child(2n) {
          background-color: darken($color: $light, $amount: 10);
        }
        td,
        th {
          flex: 2;
          &:last-child {
            flex: 1;
          }

          :global(*) {
            text-align: left;
          }
        }
      }
    }
  }
</style>
