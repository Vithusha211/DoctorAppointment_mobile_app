import { PROFILE_SUCCESS_ICON_SIZE } from '@/constants/profile';
import Svg, { Circle, G, Path } from 'react-native-svg';

type SuccessShieldIconProps = {
  size?: number;
};

export function SuccessShieldIcon({
  size = PROFILE_SUCCESS_ICON_SIZE,
}: SuccessShieldIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 131 131" fill="none">
      <Circle cx="65.5" cy="65.5" r="65.5" fill="#D8F3E7" />
      <G x="29.5" y="29.5">
        <Path
          d="M36 6L10 16V34C10 49.5 21.5 63.8 36 68C50.5 63.8 62 49.5 62 34V16L36 6Z"
          fill="#FFFFFF"
        />
        <Path
          d="M30 38L26 34L24 36L30 42L48 24L46 22L30 38Z"
          fill="#1A2533"
        />
      </G>
    </Svg>
  );
}
