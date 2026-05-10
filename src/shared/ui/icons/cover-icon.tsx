import { BadgeCircle, Cross, ViewBox, Plus, Cover } from './components';
import { BADGE_COLORS } from './constants';

export function AddCoverIcon() {
  return (
    <ViewBox>
      <Cover />
      <BadgeCircle color={BADGE_COLORS.edit} />
      <Plus />
    </ViewBox>
  );
}
export function DeleteCoverIcon() {
  return (
    <ViewBox>
      <Cover />
      <BadgeCircle color={BADGE_COLORS.delete} />
      <Cross />
    </ViewBox>
  );
}
