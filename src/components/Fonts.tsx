import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Synkopy';
        src: local('Synkopy'), url('./fonts/Synkopy-Regular.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts