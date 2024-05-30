import { cyan } from "@ant-design/colors";

const PRIMARY_COLOR = cyan.primary;

export const theme = {
    dark: '',
    light: '',
    colors: {
        primary: PRIMARY_COLOR,
        cyan: cyan,
        white: '#fff',
        textPrimary: 'rgba(0, 0, 0, 0.85)'
    },
    transition: {
        primary: 'all 0.25s linear'
    }
}

export const AntdThemeConfig = {
    token: {
        colorPrimary: PRIMARY_COLOR,
        colorLink: PRIMARY_COLOR,
        fontFamily: 'Inter',
        colorLinkHover: PRIMARY_COLOR
    }
}