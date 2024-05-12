import styled from 'styled-components';
import { isDark } from '@/lib/utils';

export const HealthCard = styled.div<{ color: string }>`
    background-color: ${(props) => props.color};
    border-radius: 1rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

export const HealthIcon = styled.div<{ theme: string }>`
    background-color: ${({ theme }) => {
      return isDark(theme) ? '#020817' : 'white';
    }};
    border-radius: 0.75rem;
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WorkoutCard = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 11rem;
    width: 11rem;
`;