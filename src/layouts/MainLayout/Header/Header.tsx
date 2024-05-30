import { useEffect, useState } from 'react'
import * as Styled from './Header.styled'

const Header = () => {
    const [show, setShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 0) {
            setShow(true);
        } else setShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    });
    
    return (
        <Styled.Header $isScroll={show}>
            
        </Styled.Header>
    )
}