/**
 * React 19 types are stricter about class components; @expo/vector-icons still
 * types icons as legacy Component classes. This shim restores valid JSX usage.
 */
declare module '@expo/vector-icons' {
  import type { ComponentType } from 'react';
  import type { StyleProp, TextStyle } from 'react-native';

  export interface IconProps<GLYPHS extends string = string> {
    name: GLYPHS;
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
  }

  export type IconComponent<GLYPHS extends string = string> = ComponentType<
    IconProps<GLYPHS>
  > & {
    glyphMap: Record<string, number | string>;
  };

  export const Ionicons: IconComponent;
  export const MaterialCommunityIcons: IconComponent;
  export const MaterialIcons: IconComponent;
  export const FontAwesome: IconComponent;
  export const FontAwesome5: IconComponent;
  export const AntDesign: IconComponent;
  export const Entypo: IconComponent;
  export const Feather: IconComponent;
}
