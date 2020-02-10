/*
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography
*/
import Typography from "typography";
import funstonTheme from 'typography-theme-funston'
const typography = new Typography(
 {
     baseFontSize: '18px',
     baseLineHeight: 1.666,
     headerFontFamily: ['Poppins', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
     bodyFontFamily: ['Karla', 'Avenir Next', 'sans-serif'],
 },
 funstonTheme
);
export const { scale, rhythm, options } = typography
export default typography;