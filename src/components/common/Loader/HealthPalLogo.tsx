import Svg, { Path } from 'react-native-svg';
import { scale } from '@/constants/layout';

const DEFAULT_SIZE = scale(40);

type HealthPalLogoIconProps = {
  size?: number;
  color?: string;
};

export function HealthPalLogoIcon({
  size = DEFAULT_SIZE,
  color = '#FFFFFF',
}: HealthPalLogoIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        d="M6 6H16V14H6V6ZM24 6H34V14H24V6ZM6 26H16V34H6V26ZM24 26H34V34H24V26ZM14 14H26V18H30V22H26V26H14V22H10V18H14V14Z"
        fill={color}
      />
    </Svg>
  );
}
