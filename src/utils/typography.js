import Typography from "typography"
import theme from 'typography-theme-github';

theme.overrideStyles = ({rhythm}, options) => ({
  'h1,h2,h3': {
    border: 'none',
    margin: '2rem 0'
  },
  'blockquote': {
    margin: 0,
    paddingLeft: '1rem',
    borderLeft: '5px solid grey'
  },
})

const typography = new Typography({
  ...theme,
  headerColor: 'var(--primary)',
  baseFontSize: '18px',
  includeNormalize: true,
  blockMarginBottom: '1.25rem'
});


export default typography;