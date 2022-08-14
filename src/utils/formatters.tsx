/* eslint-disable import/no-duplicates */
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import formatDistance from 'date-fns/formatDistance';
import { ptBR } from 'date-fns/locale';
import { theme } from '../styles/theme';

export const titleFormatter = (string: string) => {
  if (!string) return '';

  return string
    .replace('[Remoto]', '')
    .replace('[Remota]', '')
    .replace('[Remote]', '')
    .replace('[REMOTA]', '')
    .replace('[REMOTO]', '')
    .replace('[REMOTE]', '')
    .replace('[Home Office]', '')
    .replace('[100% Remoto]', '')
    .replace('[100% remoto]', '')
    .replace('[100% REMOTO]', '')
    .replace('[100% REMOTO!]', '')
    .replace('[🏝️ Remoto]', '')
    .replace('[100% REMOTA]', '')
    .replace('[100% remota]', '')
    .replace('[100% Remota]', '')
    .replace('[REMOTO FOREVER]', '')
    .replace('[Remoto Forever]', '')
    .replace('Remoto', '')
    .replace('|', '')
    .trim();
};

export const dateFormatter = (originalDate: string) => {
  const data = new Date(originalDate);
  const day = data.getDate().toString();
  const dayF = day.length === 1 ? `0${day}` : day;
  const month = (data.getMonth() + 1).toString();
  const monthF = month.length === 1 ? `0${month}` : month;
  const year = data.getFullYear();

  const standard = `${dayF}/${monthF}/${year}`;
  const fromNow = formatDistance(new Date(originalDate), new Date(), {
    addSuffix: true,
    locale: ptBR,
  });

  return { standard, fromNow };
};

export const iconFormatter = (type: string) => {
  switch (type) {
    case 'A-Combinar':
      return (
        <Ionicons name="briefcase" size={18} color={theme.colors.violet._700} />
      );

    case 'CLT':
      return (
        <Ionicons name="briefcase" size={18} color={theme.colors.violet._700} />
      );

    case 'PJ':
      return (
        <Ionicons name="briefcase" size={18} color={theme.colors.violet._700} />
      );

    case 'Freela':
      return (
        <Ionicons name="briefcase" size={18} color={theme.colors.violet._700} />
      );

    case 'Estágio':
      return '';

    case 'Flexível':
      return (
        <Ionicons
          name="md-stopwatch"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case 'Presencial':
      return (
        <Ionicons
          name="md-stopwatch"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case 'Alocado':
      return (
        <Ionicons
          name="md-stopwatch"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case 'Fora-do-país':
      return (
        <Ionicons
          name="md-paper-plane"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case '👶 Estágio':
      return '';

    case '👦 Júnior':
      return '';

    case '👨 Pleno':
      return '';

    case '👴 Sênior':
      return '';

    case 'Remoto':
      return (
        <MaterialIcons
          name="home-work"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case 'Outros':
      return '';

    case 'Especialista':
      return (
        <Ionicons name="md-star" size={18} color={theme.colors.violet._700} />
      );

    case 'Blockchain':
      return (
        <Ionicons
          name="logo-bitcoin"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case 'Remoto durante pandemia':
      return (
        <MaterialIcons
          name="coronavirus"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    case '1k-3k':
    case '3k-5k':
    case '5k-10k':
    case '15k+':
    case '10k-15k':
      return (
        <MaterialIcons
          name="attach-money"
          size={18}
          color={theme.colors.violet._700}
        />
      );

    default:
      return (
        <MaterialCommunityIcons
          name="remote-desktop"
          size={18}
          color={theme.colors.violet._700}
        />
      );
  }
};

export const tagFormatter = (string: string) => {
  if (!string) return '';

  switch (string) {
    case 'A-Combinar':
    case '⚖️ A-Combinar':
      return `A-Combinar`;

    case 'CLT':
    case '⚖️ CLT':
      return `CLT`;

    case 'PJ':
    case '⚖️ PJ':
      return `PJ`;

    case 'Freela':
    case '⚖️ Freela':
      return `Freela`;

    case 'Estágio':
    case '👶 Estágio':
      return '👶 Estágio';

    case 'Flexível':
    case '🏢 Flexível':
      return `Flexível`;

    case '🏢 Presencial':
    case 'Presencial':
      return `Presencial`;

    case 'Alocado':
      return `Alocado`;

    case '🏢 Fora-do-país':
    case 'Fora-do-país':
      return `Fora-do-país`;

    case 'JUNIOR':
    case 'Junior':
    case 'Júnior':
    case 'JÚNIOR':
    case '👦 Júnior':
    case '👦 Junior':
      return '👦 Júnior';

    case 'PLENO':
    case 'Pleno':
    case '👨 Pleno':
      return '👨 Pleno';

    case '🏢 Remoto':
    case 'Remoto':
      return `Remoto`;

    case '👴 Senior':
    case 'SENIOR':
    case 'Senior':
    case 'Sênior':
    case 'SÊNIOR':
    case '👴 Sênior':
      return '👴 Sênior';

    case '⚖️ Outros':
    case 'Outros':
      return `Outros`;

    case 'Especialista':
    case 'especialista':
      return `Especialista`;

    case 'Blockchain':
      // return "₿ " + string;
      return `Blockchain`;

    case '🦠 Remoto durante pandemia':
    case 'Remoto durante pandemia':
      return `Remoto durante pandemia`;

    case '💰 1k-3k':
    case '💰 3k-5k':
    case '💰 5k-10k':
    case '💰 15k+':
    case '💰 10k-15k':
      return `${string.replace('💰 ', '')}`;

    default:
      return string;
  }
};
