import {
  Playlist,
  IconWrapper,
  BadgeCircle,
  Cross,
  Pencil,
  DoubleArrow,
  ReorderLine,
  ReorderArrow,
} from './components';
import { BADGE_COLORS } from './constants';

export const DeletePlaylistIcon = () => {
  return (
    <IconWrapper>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.delete} />
      <Cross />
    </IconWrapper>
  );
};

export const EditPlaylistIcon = () => {
  return (
    <IconWrapper>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.edit} />
      <Pencil />
    </IconWrapper>
  );
};

export const ReorderDownIcon = () => {
  return (
    <IconWrapper>
      <ReorderArrow
        arrowLinePath={'M24 15.75V27'}
        arrowHeadPath={'M19.5 23.25L24 27.75L28.5 23.25'}
      />
      <ReorderLine path={'M20.25 30.75H27.75'} />
      <ReorderLine path={'M20.25 35.25H27.75'} />
    </IconWrapper>
  );
};

export const ReorderUpIcon = () => {
  return (
    <IconWrapper>
      <ReorderArrow
        arrowLinePath={'M24 27V16.13'}
        arrowHeadPath={'M19.5 19.88L24 15.38L28.5 19.88'}
      />

      <ReorderLine path={'M20.25 30H27.75'} />
      <ReorderLine path={'M20.25 34.5H27.75'} />
    </IconWrapper>
  );
};

export const ReorderPlaylistIcon = () => {
  return (
    <IconWrapper>
      <Playlist />
      <BadgeCircle color={BADGE_COLORS.reorder} />
      <DoubleArrow />
    </IconWrapper>
  );
};
