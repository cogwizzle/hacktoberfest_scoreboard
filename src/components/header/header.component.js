// @flow
import * as React from 'react';
import './header.component.scss';

export type Props = {
  children: React.Node;
};

export default ({ children }: Props) => (
  <h1 className="header">
    {children}
  </h1>
);
