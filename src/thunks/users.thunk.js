// @flow
import { addUserLoad, addUserSuccess, addUserFailure } from '../actions/users.action';
import { pullRequestUrl } from '../shared/constants';

// eslint-disable-next-line
export const getUser = (username: string) => {
  return (dispatch: Function) => {
    dispatch(addUserLoad(username));

    const url = pullRequestUrl.replace('{user}', username);
    fetch(url)
      .then(response => (
        response.json()
      ))
      .then((json) => {
        dispatch(addUserSuccess(
          {
            ...json,
            username,
          },
        ));
      })
      .catch((error: Error) => {
        dispatch(addUserFailure(error));
      });
  };
};
