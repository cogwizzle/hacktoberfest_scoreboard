// @flow
import type { User } from '../shared/types/user.type';

export const UsersTypes = {
  addUserLoad: '[Users] load add new user.',
  addUserSuccess: '[Users] success add new user.',
  addUserFailure: '[Users] failure add new user.',
};

export const addUserLoad = (username: string) => ({
  type: UsersTypes.addUserLoad,
  username,
});

export const addUserSuccess = (user: User) => ({
  type: UsersTypes.addUserSuccess,
  user,
});

export const addUserFailure = (username: string, error: Error) => ({
  type: UsersTypes.addUserFailure,
  error,
  username,
});

export type UsersAction = addUserLoad | addUserSuccess | addUserFailure;
