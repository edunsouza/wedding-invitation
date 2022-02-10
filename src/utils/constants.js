import { isProd, imagesRoot } from './env';

export const EVENT = {
  OWNERS: 'Eduardo & Camila',
  DATE_STRING: '16 de Abril de 2022',
  START: '17:00',
  DATE: '2022-04-16T20:00:00Z',
  ADDRESS: 'Estrada José Zingano, 1000 - Cachoeirinha - RS',
  CONTACT: '(51) 99711-5522',
  PLACE_WEBSITE: 'http://www.alamedafigueira.com.br/',
};

export const DAYS = 'Dias';

export const HOME = {
  GIFTS: {
    MENU: 'Lista de Presentes',
    TITLE: 'Clique para ser redirecionado à lista de presentes',
    REDIRECT_LABEL: 'Lista de Presentes',
    LIST: 'https://www.querodecasamento.com.br/lista-de-casamento/dudu-camila',
  },
  ATTENDANCE: {
    MENU: 'Confirmar Presença',
    TITLE: 'Informe seu nome',
    CONFIRM: 'Confirmar presença',
    SUCCESS: 'Obrigado por nos manter informados!',
    INFORM_NAME: 'É necessário informar seu nome',
    ATTENDING: 'Eu vou comparecer :D',
    NOT_ATTENDING: 'Eu NÃO vou comparecer :(',
    ERROR: 'Não foi possível confirmar sua presença. Por favor, contate os noivos',
  },
  MAP: {
    MENU: 'Mapa',
    TITLE: 'Veja o local baixo ou acesse o mapa em versão expandida',
    REDIRECT_LABEL: 'Mapa expandido',
    EXPANDED_URL: 'https://www.google.com/maps/dir/-29.9219871,-51.1081528/-29.923334,-51.114159/@-29.9224039,-51.1140759,619m/data=!3m1!1e3!5m2!1e3!1e4',
    EMBED_URL: isProd
      ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.5819101876036!2d-51.114620887706046!3d-29.921139324038403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x818ee13e88335be9!2zMjnCsDU1JzE2LjEiUyA1McKwMDYnNDguMSJX!5e1!3m2!1spt-BR!2sbr!4v1641000741148!5m2!1spt-BR!2sbr'
      : `${imagesRoot}/cover-2-sm.jpg`,
  },
};

export const INVITE = {
  TITLE: 'Felicidade só é real quando compartilhada.',
  TEXT: 'É com grande alegria que convidamos {{guests}} para testemunhar o dia em que seremos solteiros pela última vez, casados pela única vez e felizes para sempre.',
  PLACEHOLDER: '{{guests}}',
  INSTRUCTIONS_TITLE: 'Por favor, siga estas instruções:',
  INSTRUCTIONS: [
    'Confirme sua presença até 15/03/2022',
    'Tire muitas fotos no dia',
    'Use #CasamentoCaDu quando postar',
    'Se prepare para dançar',
  ],
  MESSAGE: 'Tudo foi feito com muito carinho para comemorarmos juntos essa data tão importante. Aproveite cada instante!',
  GREETINGS: 'Aguardamos você!',
};

export const GUESTS_LIST = {
  TITLE: 'Lista de Convidados',
  NAME: 'Convidado(s)',
  STATUS: 'Comparecerá',
  LOADING: 'Carregando...',
  YES: 'Sim',
  NO: 'Não',
  PASSWORD: 'Informe sua senha',
  CONFIRM: 'Acessar',
};