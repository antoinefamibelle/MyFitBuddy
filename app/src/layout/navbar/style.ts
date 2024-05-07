import { styled } from 'styled-components';
import { isDark } from '@/lib/utils';

// create a NavbarIcon styled component which takes a color prop

export const NavbarIcon = styled.div<{ theme: string; isSelected?: boolean }>`
  background-color: ${({ theme, isSelected }) => {
    if (isSelected) {
      return isDark(theme) ? 'white' : 'black';
    }
    return 'transparent';
  }};
  width: 1.75em;
  height: 2.25em;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;
`;