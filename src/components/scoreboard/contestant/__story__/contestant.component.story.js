// @flow
import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import Contestant from '../contestant.component';

storiesOf('Scoreboard/Contestant', module)
  .add('normal', () => (
    <Contestant contestant={{
      username: 'Joe',
      numberOfPullRequest: 9001,
    }}
    />
  ))
  .add('with click event', () => (
    <Contestant
      contestant={{
        username: 'Joe',
        numberOfPullRequest: 1,
      }}
      onclick={action('Contestant clicked!')}
    />
  ));
