import React from 'react';
import Link from 'next/link'

import {
  HeaderSelector
} from './styles';

const Header = () => (
  <HeaderSelector>
    <Link href="/">
      <a>Home</a>
    </Link>
  </HeaderSelector>
);

export default Header;