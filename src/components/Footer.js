import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const FooterContainer = styled.footer`
    background-color: var(--accentColour);
    color: var(--highContrastColour);

    /* Curve styles */
    ::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 10rem;
        border-bottom-left-radius: 50% 20%;
        border-bottom-right-radius: 50% 20%;
        background-color: var(--backgroundColour);
    }
`;

const FooterContent = styled.div`
    max-width: var(--contentMaxWidth);
    margin: var(--defaultMargin) auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LinkList = styled.ul`
    column-count: var(--footerColumns);
    list-style-type: none;
    padding-left: 0;
`;

const CopyrightP = styled.p`
    font-size: var(--fontSizeSmall);
    text-align: right;
`;

const Footer = () => (
    <FooterContainer>
        <FooterContent>
            You can find me:
            <LinkList>
                <li>
                    Responding late to your{' '}
                    <Link href="mailto:hello@carolgilabert.me" rel="me">
                        email{' '}
                        <span
                            role="img"
                            aria-label="emoji of an envelope sealed with a heart"
                        >
                            💌
                        </span>
                    </Link>
                </li>
                <li>
                    Oversharing on{' '}
                    <Link href="https://twitter.com/CarolSaysThings" rel="me">
                        twitter{' '}
                        <span role="img" aria-label="emoji of bird head">
                            🐦
                        </span>
                    </Link>
                </li>
                <li>
                    Stitching code together on{' '}
                    <Link href="https://github.com/carolgilabert" rel="me">
                        github{' '}
                        <span
                            role="img"
                            aria-label="emoji of a woman typing on a laptop"
                        >
                            👩‍💻
                        </span>
                    </Link>
                </li>
                <li>
                    Throwing stuff at the wall on{' '}
                    <Link href="https://glitch.com/@carolgilabert" rel="me">
                        glitch{' '}
                        <span role="img" aria-label="emoji of a crystal ball">
                            🔮
                        </span>
                    </Link>
                </li>
                <li>
                    Chatting about stuff on{' '}
                    <Link href="https://noti.st/carolgilabert" rel="me">
                        notist{' '}
                        <span role="img" aria-label="emoji of a microphone">
                            🎤
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="https://haha.business/">Ha ha business</Link>
                    -ing on{' '}
                    <Link
                        href="https://www.linkedin.com/in/carolgilabert"
                        rel="me"
                    >
                        linkedin{' '}
                        <span
                            role="img"
                            aria-label="emoji of a woman wearing a suit"
                        >
                            👩‍💼
                        </span>
                    </Link>
                </li>
            </LinkList>
            <CopyrightP>
                © 2020 · Carolina Gilabert ·
                <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
                    cc-by-sa
                </Link>
            </CopyrightP>
        </FooterContent>
    </FooterContainer>
);

export default Footer;
