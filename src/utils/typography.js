import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Fira Code",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Fira Code"],
  headerWeight: 400,
  bodyFontFamily: ["Fira Code"],
  headerWeight: 300,
})
export default typography
