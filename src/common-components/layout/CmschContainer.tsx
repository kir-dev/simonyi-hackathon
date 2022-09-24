import { BoxProps, Flex } from '@chakra-ui/react'
import { HasChildren } from '../../util/react-types.util'

type Props = { glossy?: boolean } & HasChildren & BoxProps

export const CmschContainer = ({ children, glossy = true, backgroundColor, backdropFilter, boxShadow, ...props }: Props) => {
  return (
    <Flex
      flexDirection="column"
      p={5}
      mx="auto"
      maxWidth={['100%', '48rem']}
      borderRadius={20}
      boxShadow={glossy ? '0 4px 30px rgba(0, 0, 0, 0.1)' : boxShadow}
      backdropFilter={glossy ? 'blur(15px)' : backdropFilter}
      backgroundColor={glossy ? 'rgba(23, 25, 35, 0.4)' : backgroundColor}
      {...props}
    >
      {children}
    </Flex>
  )
}
