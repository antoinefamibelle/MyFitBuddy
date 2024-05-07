import { styled } from 'styled-components';
import { isDark } from '@/lib/utils';

// create a NavbarIcon styled component which takes a color prop

export const NavbarIcon = styled.div<{ theme: string; isSelected?: boolean }>`
  background-color: ${({ theme }) => isDark(theme) ? 'white' : 'black'};
  
`;