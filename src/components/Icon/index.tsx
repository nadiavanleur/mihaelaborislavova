import React from 'react';
import { RxComponentPlaceholder } from 'react-icons/rx';
import { MdDownload } from 'react-icons/md';
import { PiEnvelopeOpenFill } from 'react-icons/pi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { GrSoundcloud } from 'react-icons/gr';
import { BiLogoSpotify } from 'react-icons/bi';
import { ReactComponent as IoLogoTiktok } from '../../assets/svg/tiktok.svg';

export const AVAILABLE_ICONS: { [key: string]: any } = {
  default: RxComponentPlaceholder,
  download: MdDownload,
  email: PiEnvelopeOpenFill,
  facebook: AiFillFacebook,
  instagram: AiOutlineInstagram,
  linkedIn: AiFillLinkedin,
  phone: BiSolidPhone,
  soundcloud: GrSoundcloud,
  spotify: BiLogoSpotify,
  tiktok: IoLogoTiktok
} as const;

export type IconType = keyof typeof AVAILABLE_ICONS;

type Props = {
  icon?: IconType;
  fallbackIcon?: IconType;
  size?: number;
  className?: string;
};

const ICON_DEFAULT: Readonly<any> = RxComponentPlaceholder;

const Icon = ({ icon, fallbackIcon, size, className }: Props) => {
  const iconToUse = icon || fallbackIcon || ``;
  const SelectedIcon: any = AVAILABLE_ICONS[iconToUse] || ICON_DEFAULT;
  if (!SelectedIcon) return null;

  return (
    <SelectedIcon
      width={size}
      height={size}
      className={className}
      style={{ display: `block`, width: size, height: size }}
    />
  );
};

export const AllIcons = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
      {Object.keys(AVAILABLE_ICONS).map((icon) => (
        <li key={icon}>
          <Icon icon={icon as IconType} size={24} />
          <small>{icon}</small>
        </li>
      ))}
    </ul>
  )
}

export default Icon;
