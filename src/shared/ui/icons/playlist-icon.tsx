import { Playlist, ViewBox, BadgeCircle, Cross, Pencil, DoubleArrow } from './components';
import { BADGE_COLORS } from './constants';

export function DeletePlaylistIcon() {
  return (
    <ViewBox>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.delete} />
      <Cross />
    </ViewBox>
  );
}

export function EditPlaylistIcon() {
  return (
    <ViewBox>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.edit} />
      <Pencil />
    </ViewBox>
  );
}
export function ReorderPlaylistIcon() {
  return (
    <ViewBox>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.reorder} />
      <DoubleArrow />
    </ViewBox>
  );
}
