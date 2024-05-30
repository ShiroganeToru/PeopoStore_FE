import styled, { css } from "styled-components";
import { theme } from "../../../themes";

export const Header = styled.header<{ $isScroll: boolean}>`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 24px 0;
    background-color: transparent;

    ${(props) => 
        props.$isScroll &&
        css`
            background: ${theme.colors.white};
            transition: all 0.4s ease-in;
            box-shadow: 0px 17px 55px 0px ${theme.colors.shadowCart}
        `
    }
`;