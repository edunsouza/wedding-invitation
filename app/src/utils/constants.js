import { isProd } from './env';

export const EVENT_OWNERS = 'Eduardo & Camila';
export const EVENT_DATE_STRING = '16 de Abril de 2022';
export const EVENT_START = '17:00';
export const EVENT_DATE = '2022-04-16T20:00:00Z';
export const EVENT_ADDRESS = 'Estrada José Zingano, 1000 - Cachoeirinha - RS';
export const EVENT_CONTACT = '(51) 99711-5522';
export const EVENT_GIFTS_LIST = 'https://www.querodecasamento.com.br/lista-de-casamento/dudu-camila';
export const EVENT_PLACE_WEBSITE = 'http://www.alamedafigueira.com.br/';
export const EVENT_MAP_EXPANDED = 'https://www.google.com/maps/dir/-29.9219871,-51.1081528/-29.923334,-51.114159/@-29.9224039,-51.1140759,619m/data=!3m1!1e3!5m2!1e3!1e4';
export const EVENT_MAP_EMBED = isProd
    ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.5819101876036!2d-51.114620887706046!3d-29.921139324038403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x818ee13e88335be9!2zMjnCsDU1JzE2LjEiUyA1McKwMDYnNDguMSJX!5e1!3m2!1spt-BR!2sbr!4v1641000741148!5m2!1spt-BR!2sbr'
    : `${window.location.href}/img/cover-1.jpg`;

export const DAYS = 'Dias';

export const MENU_GIFTS = 'Lista de Presentes';
export const MENU_ATTENDANCE = 'Confirmar Presença';
export const MENU_MAP = 'Mapa';

export const GIFTS_LABEL = 'Lista de Presentes';
export const GIFTS_REDIRECT_LABEL = 'Clique para ser redirecionado à lista de presentes';
export const MAP_LABEL = 'Veja o local baixo ou acesse o mapa em versão expandida';
export const MAP_REDIRECT_LABEL = 'Mapa expandido';