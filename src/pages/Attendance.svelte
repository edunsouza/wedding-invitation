<script>
  import { HOME } from '../utils/constants';
  import { confirm } from '../services/attendance';
  import { scrollToElement } from '../utils/animations';
  import Label from '../components/Label.svelte';
  import Icon from '../components/Icon.svelte';

  const {
    TITLE,
    ERROR,
    CONFIRM,
    SUCCESS,
    INFORM_NAME,
    ATTENDING,
    NOT_ATTENDING,
  } = HOME.ATTENDANCE;

  let attendee = null;
  let attending = true;
  let scrollTarget = null;
  let checkboxIcon = 'check_circle';
  let checkboxColor = 'primary';

  const onToggle = () => (attending = !attending);
  const onType = (event) => {
    event.preventDefault();
    attendee = event.target.value.toLowerCase().replace(/[\s,.]+/gi, '-');
  };
  const onConfirm = async () => {
    if (!attendee) {
      alert(INFORM_NAME);
      return;
    }

    try {
      const { error } = await confirm({ attendee, attending });
      if (error) {
        throw error;
      }
      alert(SUCCESS);
    } catch (error) {
      console.error(error);
      alert(ERROR);
    }
  };

  $: scrollTarget && scrollToElement({ target: scrollTarget });
  $: {
    checkboxIcon = attending ? 'check_circle' : 'cancel';
    checkboxColor = attending ? 'primary' : 'secondary';
  }
</script>

<section>
  <Label>{TITLE}</Label>
  <input type="text" on:input={onType} bind:value={attendee} />
  <span>
    <Icon on:click={onToggle} icon={checkboxIcon} color={checkboxColor} />
    <input id="attending" type="checkbox" bind:checked={attending} />
    <label for="attending">{attending ? ATTENDING : NOT_ATTENDING}</label>
  </span>
  <button bind:this={scrollTarget} on:click={onConfirm}>{CONFIRM}</button>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 85vh;

    input[type='text'] {
      font-size: 26px;
      padding: 10px;
      border: 2px solid $dark;
      border-radius: 10px;
      color: $primary;
      text-align: center;
      background: $light;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 70px 20px;
      font-size: 28px;
      color: $dark;

      [type='checkbox'] {
        display: none;
      }

      label {
        margin-left: 15px;
        user-select: none;
        cursor: pointer;
      }
    }

    button {
      color: $light;
      cursor: pointer;
      background-color: $primary;
      padding: 20px;
      font-size: 22px;
      border-radius: 10px;

      &:active {
        background-color: darken($color: $primary, $amount: 10);
      }
    }
  }
</style>
