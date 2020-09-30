// @flow
import { getUser } from '../thunks/users.thunk';

// eslint-disable-next-line
export const getUserPullRequest = (username: string) => {
  return getUser(username);
};
