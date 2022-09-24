import { createContext, useContext } from 'react'
import { Button, ButtonGroup, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

import { HasChildren } from '../../../util/react-types.util'
import { ConfigDto } from './types'
import { useConfigQuery } from '../../hooks/useConfigQuery'
import { Loading } from '../../../common-components/Loading'
import { CmschPage } from '../../../common-components/layout/CmschPage'
import { l } from '../../../util/language'

export const ConfigContext = createContext<ConfigDto | undefined>(undefined)

export const ConfigProvider = ({ children }: HasChildren) => {
  const { data, isLoading, error, refetch } = useConfigQuery()
  if (isLoading)
    return (
      <Flex h="100vh" align="center" justify="center">
        <CmschPage justifyContent="center" alignItems="center">
          <Loading />
          <Image src={'/img/kirdev-white.svg'} maxW={40} maxH={40} my={3} />
        </CmschPage>
      </Flex>
    )
  if (error)
    return (
      <Flex h="100vh" align="center" justify="center">
        <CmschPage justifyContent="center" alignItems="center">
          <Helmet title={l('error-page-helmet')} />
          <Heading textAlign="center">{l('error-page-title')}</Heading>
          <Text textAlign="center" color="gray.500" marginTop={10}>
            {l('error-connection-unsuccessful')}
          </Text>
          <ButtonGroup justifyContent="center" marginTop={10}>
            <Button
              colorScheme="brand"
              onClick={() => {
                refetch()
              }}
            >
              Újra
            </Button>
          </ButtonGroup>
        </CmschPage>
      </Flex>
    )
  return <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
}

export const useConfigContext = () => useContext<ConfigDto | undefined>(ConfigContext)
