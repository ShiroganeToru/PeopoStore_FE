import styled from "styled-components";

export const ContainerStyled = styled.div<{$isWide: boolean}>`
    width: ${(props) => (props.$isWide ? '1440px' : '1170px')};
    max-width: calc(100% - 48px);
    margin: 0 auto;

    ${({theme}) => theme.breakpoints.down('xs')} {
        max-width: calc(100% - 24);
    }
`;