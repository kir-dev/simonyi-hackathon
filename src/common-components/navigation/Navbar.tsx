import { Box, Collapse, Flex, Icon, IconButton, Image, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'
import { DesktopNav } from './desktop/DesktopNav'
import { MobileNav } from './mobile/MobileNav'
import { useConfigContext } from '../../api/contexts/config/ConfigContext'

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const config = useConfigContext()
  return (
    <Box mx="auto" w="100%">
      <Flex
        mx="auto"
        color="white"
        minH={{ base: '3rem', md: '4.5rem' }}
        maxW={['100%', '100%', '56rem']}
        py={2}
        px={4}
        align="center"
        justify="space-between"
      >
        <Link to="/">
          <Image maxH={16} maxW={28} src="/img/logo.png" alt={config?.components.app.siteName} />
        </Link>
        <Flex display={{ base: 'none', md: 'flex' }} mx={4}>
          <DesktopNav />
        </Flex>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <Icon as={FaTimes} w={5} h={5} /> : <Icon as={FaBars} w={5} h={5} />}
          variant="ghost"
          aria-label="Navigáció megnyitása"
        />
      </Flex>
      {/*The method in onClick hides the menu items when a menu item is clicked. Works for collapsible items too!*/}
      <Collapse
        in={isOpen}
        animateOpacity
        onClick={(evt) => {
          if ((evt.target as Element).closest('.navitem')) onToggle()
        }}
      >
        <MobileNav />
      </Collapse>
    </Box>
  )
}
