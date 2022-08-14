import { iconFormatter, tagFormatter } from '../../../utils/formatters';
import { BadgeIcon, BadgeTitle, BadgeWrapper } from './styles';

interface BadgeProps {
  name: string;
}

function Badge({ name }: BadgeProps) {
  return (
    <BadgeWrapper>
      <BadgeIcon isEmpty={iconFormatter(tagFormatter(name)) === ''}>
        {iconFormatter(tagFormatter(name))}
      </BadgeIcon>
      <BadgeTitle>{tagFormatter(name)}</BadgeTitle>
    </BadgeWrapper>
  );
}

export default Badge;
