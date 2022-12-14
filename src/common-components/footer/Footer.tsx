import { Center, Flex, HStack, Image, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaHeart, FaInstagram, FaPaintBrush } from 'react-icons/fa'
import { CmschContainer } from '../layout/CmschContainer'
import { BUGREPORT_URL } from '../../util/configs/environment.config'
import { customTheme } from '../../util/configs/theme.config'
import Markdown from '../Markdown'
import { useConfigContext } from '../../api/contexts/config/ConfigContext'
import { useMemo } from 'react'
import parseSponsors from './utils/parseSponsors'

export const Footer = () => {
  const config = useConfigContext()
  const component = config?.components.app
  const sponsors = useMemo(() => parseSponsors(component?.sponsorLogoUrls, component?.sponsorAlts, component?.sponsorWebsiteUrls), [config])
  return (
    <CmschContainer mb={5}>
      {component?.sponsorsEnabled && sponsors.length > 0 && (
        <>
          <Text textAlign="center" fontSize="xl">
            Támogatóink
          </Text>
          <Flex
            justifyContent={'center'}
            alignItems="center"
            flexWrap="wrap"
            my={5}
            backgroundColor="rgba(255,255,255,0.1)"
            borderRadius="base"
          >
            {sponsors.map((sp) => (
              <Link href={sp.url} m={2} key={sp.image}>
                <Image src={sp.image} alt={sp.alt} maxHeight={40} maxWidth={40} />
              </Link>
            ))}
          </Flex>
        </>
      )}
      {component?.footerMessage && (
        <Center flexDirection="column" px="4" py="4" mx="auto" maxWidth="100%">
          <Markdown text={component?.footerMessage} />
        </Center>
      )}
      <Flex justify="center" align="center" flexDirection={['column', null, 'row']}>
        <Flex align="center" flexDirection="column" justifyContent="center" mb={10} mx={10}>
          <Image src={component?.hostLogo} maxW={40} maxH={40} my={3} alt={component?.hostAlt} />
          <Link
            isExternal
            fontSize="xl"
            _hover={{ color: customTheme.colors.brand, textDecorationLine: 'underline' }}
            href={component?.hostWebsiteUrl}
          >
            Weboldal
          </Link>
          <HStack>
            {component?.facebookUrl && (
              <Link href={component?.facebookUrl}>
                <FaFacebook size={25} />
              </Link>
            )}
            {component?.instagramUrl && (
              <Link href={component?.instagramUrl}>
                <FaInstagram size={25} />
              </Link>
            )}
          </HStack>
        </Flex>
        <Flex align="center" flexDirection="column" justifyContent="center" mb={10} mx={10}>
          <Flex align="center">
            <Text mr={2}>Made with</Text>
            <FaHeart color="red" size="1.5rem" />
            <Text ml={2}>by</Text>
          </Flex>
          <Image src={useColorModeValue('/img/kirdev.svg', '/img/kirdev-white.svg')} maxW={40} maxH={40} my={3} />
          <Flex align="center">
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.brand, textDecorationLine: 'underline' }}
              href={component?.devWebsiteUrl}
            >
              Weboldal
            </Link>
            <Text>|</Text>
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.kirDev, textDecorationLine: 'underline' }}
              href={BUGREPORT_URL}
            >
              Kapcsolat
            </Link>
          </Flex>
        </Flex>
        <Flex align="center" flexDirection="column" justifyContent="center" mb={10} mx={10}>
          <Flex align="center">Graphic design by</Flex>
          <Image src="/img/schdesign.svg" maxW={40} maxH={40} my={3} />
          <Flex align="center">
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.brand, textDecorationLine: 'underline' }}
              href="https://schdesign.hu"
            >
              Weboldal
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </CmschContainer>
  )
}
