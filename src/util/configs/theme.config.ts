import { extendTheme } from '@chakra-ui/react'

export let customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'url("/img/background.png")',
        bgPosition: 'center',
        bgSize: 'cover',
        bgAttachment: 'fixed',
        fontFamily: "'Chakra Petch', sans-serif"
      },
      hr: {
        borderStyle: 'dashed',
        borderRightStyle: 'dashed',
        borderLeftStyle: 'dashed',
        borderTopStyle: 'dashed',
        borderBottomStyle: 'dashed'
      }
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    brand: {
      50: '#f9fbe6',
      100: '#f4f6cc',
      200: '#e8ed99',
      300: '#dde566',
      400: '#d1dc33',
      500: '#c6d300',
      600: '#9ea900',
      700: '#777f00',
      800: '#4f5400',
      900: '#282a00'
    },
    kirDev: '#F15A29'
  },
  components: {
    Heading: {
      baseStyle: {
        marginTop: 5,
        fontFamily: "'Chakra Petch', sans-serif"
      }
    },
    Divider: {
      baseStyle: {
        borderStyle: 'dashed',
        borderRightStyle: 'dashed',
        borderLeftStyle: 'dashed',
        borderTopStyle: 'dashed',
        borderBottomStyle: 'dashed'
      }
    }
    // Text: {
    //   baseStyle: {
    //     // fontSize: 'lg'
    //     fontFamily: "'Chakra Petch', sans-serif"
    //   }
    // }
  }
})
