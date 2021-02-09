import Typography from "typography"
import theme from 'typography-theme-github';

const typography = new Typography({
  ...theme,
  headerColor: 'var(--primary)',
  baseFontSize: '18px',
  includeNormalize: true
});


export default typography;