// @flow
import React from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { getUserPullRequest } from '../../services/pull-request.service';
import { users as USERS } from '../../shared/constants';

import type { Contestant } from '../../shared/types/contestant.type';

export type Props = {
  contestants?: Contestant[],
  getContestants: Function,
}

export type State = {
  previousContestants?: Contestant[],
}

export const orderByNumberOfPullRequest = (
  contestant1: Contestant,
  contestant2: Contestant,
) => {
  if (contestant1.numberOfPullRequest > contestant2.numberOfPullRequest) return -1;
  if (contestant1.numberOfPullRequest < contestant2.numberOfPullRequest) return 1;
  return 0;
};

// TODO: Remove this nextline disable.
// eslint-disable-next-line
export class Scoreboard extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const { contestants } = props;
    this.state = {
      previousContestants: contestants || [],
    };
  }

  componentDidMount() {
    const { getContestants } = this.props;
    getContestants();
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { previousContestants } = prevState;
    const { contestants } = nextProps;
    if (!isEqual(previousContestants, contestants)) {
      return {
        previousContestants: contestants,
      };
    }
    return null;
  }


  /**
   * JSX based render function.
   *
   * @return {string} JSX DOM.
   */
  render() {
    const { contestants } = this.props;

    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        {contestants
          .sort(orderByNumberOfPullRequest)
          .map(contestant => (
            <div>{`${contestant.username} ${contestant.numberOfPullRequest}`}</div>
          ))
        }
      </div>
    );
  }
}

Scoreboard.defaultProps = {
  contestants: [],
};

const mapStateToProps = ({ users }) => ({
  // eslint-disable-next-line
  contestants: users.map(({ total_count, username }) => ({
    username,
    numberOfPullRequest: total_count,
  })),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getContestants: () => (
    USERS.map(user => dispatch(getUserPullRequest(user)))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
