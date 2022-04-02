import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  /*
    1. Use a more-intuitive box-sizing model.
    2. Reset margins and paddings
  */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    lineHeight: `calc( 1em + 0.5rem )`,
    fontFamily: `'Evo 2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
  },
  /*
    3. Allow percentage-based heights in the application
  */
  'html, body, #root, #__next': {
    height: '100%'
  },
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body: {
    '-webkit-font-smoothing': 'antialiased'
  },
  /*
    6. Improve media defaults
  */
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  /*
    7. Remove built-in form typography styles
  */
  'input, button, textarea, select': {
    font: 'inherit'
  },
  /*
    8. Avoid text overflows
  */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  },
  /*
    9. Create a root stacking context
  */
  '#root, #__next': {
    isolation: 'isolate'
  }
})
