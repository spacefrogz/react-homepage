import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Synkopy-Regular';
        src: url('./fonts/Synkopy/Synkopy-Regular.eot'); /* IE9 Compat Modes */
        src: url('./fonts/Synkopy/Synkopy-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('./fonts/Synkopy/Synkopy-Regular.woff2') format('woff2'), /* Super Modern Browsers */
             url('./fonts/Synkopy/Synkopy-Regular.woff') format('woff'), /* Pretty Modern Browsers */
             local('Synkopy'), url('./fonts/Synkopy/Synkopy-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
             url('./fonts/Synkopy/Synkopy-Regular.svg#SynkopyRegular') format('svg');
      }
      @font-face {
        font-family: 'Synkopy-Flipside';
        src: local('Synkopy'), url('./fonts/Synkopy/Synkopy-Flipside.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Genos';
        src: local('Synkopy'), url('./fonts/Genos-VariableFont_wght.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts