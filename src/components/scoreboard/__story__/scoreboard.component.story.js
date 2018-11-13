// @flow
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Scoreboard } from '../scoreboard.component';
import contestants from './contestants.mock';

storiesOf('Scoreboard', module)
  .add('with contestants', () => (
    <Scoreboard contestants={contestants} />
  ))
  .add('without contestants', () => (
    <Scoreboard contestants={[]} />
  ));
