// @flow
import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from '../header.component';

storiesOf('Header', module)
  .add('Render header with test title.', () => (
    <Header>Test title for Storybook</Header>
  ));
