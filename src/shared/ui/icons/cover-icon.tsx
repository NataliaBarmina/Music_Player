import { BadgeCircle, Cross, IconWrapper, Plus, Cover } from './components';
import { BADGE_COLORS } from './constants';

export function AddCoverIcon() {
  return (
    <IconWrapper>
      <Cover />
      <BadgeCircle color={BADGE_COLORS.edit} />
      <Plus />
    </IconWrapper>
  );
}
export function DeleteCoverIcon() {
  return (
    <IconWrapper>
      <Cover />
      <BadgeCircle color={BADGE_COLORS.delete} />
      <Cross />
    </IconWrapper>
  );
}
