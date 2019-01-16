/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from '../Misc';
import CVFile from '../../docs/CV-Carolina-Gilabert.pdf';

const linkStyles = css`
  box-shadow: none;
  margin: 0 10px;
`;

const menuStyles = css`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Navigation = () => (
  <div css={menuStyles}>
    <Link css={linkStyles} to="/">
      Home
    </Link>
    <Link css={linkStyles} to="/about">
      About
    </Link>
    <Link css={linkStyles} to="/blog">
      Blog
    </Link>
    <OutboundLink css={linkStyles} href={CVFile} target="_blank">
      CV
    </OutboundLink>
  </div>
);

export default Navigation;
