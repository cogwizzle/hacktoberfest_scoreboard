/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React from 'react';
import './contestant.component.scss';

import type { Contestant } from '../../../shared/types/contestant.type';

export type Props = {
  contestant: Contestant,
  // eslint-disable-next-line react/require-default-props
  onclick?: Function,
};

export default ({ contestant, onclick }: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="contestant" onClick={onclick}>
    <div className="username">
      {contestant.username}
    </div>
    <div className="count">
      {contestant.numberOfPullRequest}
    </div>
  </div>
);
