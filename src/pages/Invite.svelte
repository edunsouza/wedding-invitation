<script>
  import { capitalize } from '../utils/string';
  import { INVITE } from '../utils/constants';
  import Title from './../components/Title.svelte';
  import Label from './../components/Label.svelte';
  import Circle from '../../public/img/wreath.svg';

  const {
    TITLE,
    TEXT: TEXT_RAW,
    PLACEHOLDER,
    INSTRUCTIONS_TITLE,
    INSTRUCTIONS,
    MESSAGE,
    GREETINGS,
  } = INVITE;

  export let guest = '';
  const names = guest.split('-');
  const folks = names
    .map(capitalize)
    .join(', ')
    .replace(/,(?=[^,]*$)/, ' & ');
  const pronoun = names.length > 1 ? 'vocês' : 'você';
  const guests = `${pronoun}, ${folks},`;
  const TEXT = TEXT_RAW.replace(PLACEHOLDER, guests);
</script>

<section>
  <aside />
  <Circle />
  <article>
    <Title value={TITLE} />
    <Label type="body">{TEXT}</Label>
    <Title value={INSTRUCTIONS_TITLE} />
    <ul>
      {#each INSTRUCTIONS as instruction}
        <li>
          <Label type="body">{instruction}</Label>
        </li>
      {/each}
    </ul>
    <Label type="body">{MESSAGE}</Label>
    <Title value={GREETINGS} />
  </article>
</section>

<style lang="scss">
  @keyframes rotate {
    100% {
      transform: scaleX(1.6) scaleY(1.2) rotate(450deg);
    }
  }

  section {
    background-image: url('../img/invite.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;

    @media (max-width: $sm) {
      overflow: scroll;
      height: auto;
      margin: 0;
    }

    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 950px;
      height: 750px;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 50%;

      @media (max-width: $sm) {
        position: absolute;
        width: 100vw;
        height: 120vh;
        z-index: 99;
        border-radius: 0;
        -webkit-backdrop-filter: blur(4px);
      }
    }

    :global(svg) {
      width: 900px;
      height: 900px;
      position: absolute;
      top: calc(50% - 450px);
      left: calc(50% - 450px);
      transform: scaleX(1.6) scaleY(1.2) rotate(90deg);
      fill: $primary;
      filter: drop-shadow(1px -2px 4px $sunray);
      animation: rotate 100s linear infinite;

      @media (max-width: $sm) {
        display: none;
      }
    }

    article {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      margin-left: 40px;

      @media (max-width: $sm) {
        margin: 0;
        margin-top: 30px;
        position: unset;
        z-index: 100;
      }

      :global(h1),
      :global(p),
      ul,
      li {
        margin: 0;
        padding: 0;
      }

      ul {
        margin-bottom: 60px;
        text-align: left;
        color: $light;
        list-style-type: none;

        @media (max-width: $sm) {
          margin: 0px;
          margin-bottom: 30px;
          text-align: center;
        }
      }

      :global(h1) {
        width: 80%;
        margin: 30px 0 20px 0;
        font-size: 48px;
        color: $secondary;
        text-shadow: 2px 3px 1px $dark;

        &:first-child {
          margin-top: 0px;
        }
        &:last-child {
          margin-top: 5px;
        }

        @media (max-width: $sm) {
          width: 100%;
          font-size: 36px;
        }
      }

      :global(p) {
        width: 55%;
        font-size: 26px;
        line-height: 22px;
        color: $light;
        text-shadow: 1px 2px 1px $dark;

        @media (max-width: $sm) {
          font-size: 20px;
          line-height: 20px;
          margin: 0;
          padding: 0;
        }
      }

      li > :global(p) {
        width: 100%;
        line-height: 28px;

        @media (max-width: $sm) {
          line-height: 22px;
        }
      }

      @media (max-width: $sm) {
        :global(h1) {
          width: 100%;
        }

        :global(p) {
          width: 90%;
        }
      }
    }
  }
</style>
