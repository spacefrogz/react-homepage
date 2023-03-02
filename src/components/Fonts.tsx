import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Synkopy-Regular';
        src: url('./fonts/Synkopy/Synkopy-Regular.eot'); /* IE9 Compat Modes */
        src: local('Synkopy'), url('./fonts/Synkopy/Synkopy-Regular.ttf') format('truetype');
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