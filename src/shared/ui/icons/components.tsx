import type { ReactNode } from 'react';
import { COLORS } from './constants';

export const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <svg width={38} height={38} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};

export const Playlist = () => {
  return (
    <>
      <rect x="7" y="8" width="28" height="32" rx="5" fill={COLORS.playlistBackground} />

      <path d="M14 17H29" stroke={COLORS.border} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 24H25" stroke={COLORS.border} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 31H21" stroke={COLORS.border} strokeWidth="2" strokeLinecap="round" />
    </>
  );
};

export const BadgeCircle = ({ color }: { color: string }) => {
  return <circle cx="35" cy="34" r="9" fill={color} />;
};

export const Cross = () => {
  return (
    <>
      <path d="M31 30L39 38" stroke={COLORS.white} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M39 30L31 38" stroke={COLORS.white} strokeWidth="2.5" strokeLinecap="round" />
    </>
  );
};

export const Pencil = () => {
  return (
    <>
      <path
        d="M34.1 34.9L38.2 30.8"
        stroke={COLORS.white}
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path d="M31.3 37.7L33.2 33.8L35.2 35.8Z" fill={COLORS.white} />
    </>
  );
};

export const DoubleArrow = () => {
  return (
    <>
      <path d="M35 28V40" stroke={COLORS.white} strokeWidth="3.4" strokeLinecap="round" />

      <path
        d="M31 32L35 28L39 32"
        stroke={COLORS.white}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 36L35 40L39 36"
        stroke={COLORS.white}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
};

export const Plus = () => {
  return (
    <>
      <path d="M36 29V39" stroke={COLORS.white} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M31 34H41" stroke={COLORS.white} strokeWidth="2.5" strokeLinecap="round" />
    </>
  );
};

export const Cover = () => {
  return (
    <>
      <rect x="6" y="9" width="28" height="32" rx="5" fill={COLORS.coverBackground} />
      <rect x="6" y="9" width="28" height="32" rx="5" stroke={COLORS.border} strokeWidth="1" />

      <circle cx="16" cy="18" r="4" fill={COLORS.coverSun} />
      <path
        d="M9 34L18 25L25 32L29 28L38 37H11C9.9 37 9 36.1 9 35V34Z"
        fill={COLORS.coverMountain}
      />
    </>
  );
};

export const ReorderLine = ({ path }: { path: string }) => {
  return (
    <>
      <path d={path} stroke={COLORS.border} strokeWidth="1.2" strokeLinecap="round" />
    </>
  );
};

export const ReorderArrow = ({
  arrowLinePath,
  arrowHeadPath,
}: {
  arrowLinePath: string;
  arrowHeadPath: string;
}) => {
  return (
    <>
      <rect x="10" y="9" width="28" height="32" rx="4.5" fill={COLORS.playlistBackground} />
      <path d={arrowLinePath} stroke={COLORS.border} strokeWidth="3" strokeLinecap="round" />
      <path
        d={arrowHeadPath}
        stroke={COLORS.border}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  );
};
