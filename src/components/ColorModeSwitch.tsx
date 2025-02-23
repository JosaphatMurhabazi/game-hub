import { HStack, ClientOnly, IconButton, Skeleton } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';
import { LuMoon, LuSun } from 'react-icons/lu';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === 'light' ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
    </HStack>
  );
};

export default ColorModeSwitch;
