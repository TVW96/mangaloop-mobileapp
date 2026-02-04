import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { AppFonts } from "@/constants/theme";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "nunito"
    | "nunitoBold"
    | "alfa"
    | "alfaOutline";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "nunito" ? styles.nunito : undefined,
        type === "nunitoBold" ? styles.nunitoBold : undefined,
        type === "alfa" ? styles.alfa : undefined,
        type === "alfaOutline" ? styles.alfaOutline : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: AppFonts.nunito,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  defaultSemiBold: {
    fontFamily: AppFonts.nunitoBold,
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontFamily: AppFonts.nunito,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: AppFonts.nunito,
    fontSize: 20,
    fontWeight: "700",
  },
  link: {
    fontFamily: AppFonts.nunitoBold,
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  nunito: {
    fontFamily: AppFonts.nunito,
    fontSize: 16,
  },
  nunitoBold: {
    fontFamily: AppFonts.nunitoBold,
    fontSize: 16,
  },
  alfa: {
    fontFamily: AppFonts.alfa,
    fontSize: 24,
  },
  alfaOutline: {
    fontFamily: AppFonts.alfa,
    fontSize: 24,

    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 0,
  },
  alfaShadow: {
    fontFamily: AppFonts.alfa,
    fontSize: 24,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
});
