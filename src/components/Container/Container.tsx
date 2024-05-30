import { FC, PropsWithChildren } from "react";
import { ContainerStyled } from "./Container.styled";
import { useLocation } from "react-router-dom";
import config from "../../config";

const Container: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();
    const isWide = pathname.includes(config.routes.customer.profile);

    return <ContainerStyled $isWide={isWide}>{children}</ContainerStyled>;
};

export default Container;