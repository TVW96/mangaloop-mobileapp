/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useThemeColor(
  props: {
    light?: string;
    dark?: string;
    lightContrast?: string;
    darkContrast?: string;
  },
  colorName: keyof typeof Colors.light &
    keyof typeof Colors.dark &
    keyof typeof Colors.lightContrast &
    keyof typeof Colors.darkContrast,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
