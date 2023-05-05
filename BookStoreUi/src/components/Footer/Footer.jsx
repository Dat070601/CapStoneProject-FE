import { Button, ButtonGroup, Container, Divider, IconButton, Input, Stack, Text, Tooltip} from '@chakra-ui/react'
import { FaGithub, FaFacebookSquare } from 'react-icons/fa'
import { FiMail } from "react-icons/fi";
import Logo  from '../Logo'
import { COLOR } from '../../constant'

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" maxW={"container.lg"}>
    <Stack
      spacing="8"
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      py={{
        base: '12',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '6',
          md: '8',
        }}
        align="start"
      >
        <Logo fontSize={40}/>
        <Text color="muted">Create beautiful websites remarkably fast.</Text>
      </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '12',
          md: '8',
        }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{
              base: 'column',
              sm: 'row',
            }}
          >
            <Input placeholder="Enter your email" type="email" required />
            <Button variant="primary" type="submit" flexShrink={2}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{
        base: 'column-reverse',
        md: 'row',
      }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <Tooltip hasArrow label='datd789@gmail.com' placement='left'>
            <IconButton
            as="a"
            href="#"
            aria-label="email"
            icon={<FiMail fontSize="1.25rem" />}
            />
        </Tooltip>
        <IconButton as="a" href="https://github.com/Dat070601" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        <IconButton as="a" href="https://www.facebook.com/hope.hoangdat/" aria-label="Facebook" icon={<FaFacebookSquare fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack>
  </Container>
  )
}

export default Footer