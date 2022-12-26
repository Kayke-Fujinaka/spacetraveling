export interface ITheme {
  colors: Record<string, string>;
  fontSizes: Record<string, string>;
  fontWeights: Record<string, number>;
  lineHeights: Record<string, string | number>;
  spaces: Record<number, string>;
}
