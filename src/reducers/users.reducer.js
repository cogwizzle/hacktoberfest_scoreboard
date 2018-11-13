import { UsersTypes } from '../actions/users.action';
import type { UsersAction } from '../actions/users.action';
import type { User } from '../shared/types/user.type';

// TODO: Remove hack after demo.
const testUsers = [
  {
    username: 'jfehrman',
    total_count: 5,
  },
  {
    username: 'gerritbond',
    total_count: 1,
  },
  {
    username: 'protofitz',
    total_count: 1,
  },
  {
    username: 'chalb500',
    total_count: 7,
  },
  {
    username: 'jlarkin42',
    total_count: 5,
  },
  {
    username: 'jmicucci',
    total_count: 5,
  },
];

// @flow
type State = {
  users: User[];
  usersLoading: string[];
  error: string;
};

export const defaultState = {
  users: [],
  usersLoading: [],
  error: null,
};

export default (state: State = defaultState, action: UsersAction) => {
  switch (action.type) {
    case UsersTypes.addUserLoad:
      return {
        ...state,
        usersLoading: [...state.usersLoading, action.username],
      };
    case UsersTypes.addUserSuccess:
      return {
        ...state,
        users: [
          ...state.users,
          action.user,
        ],
      };
    case UsersTypes.addUserFailure:
      return {
        ...state,
        usersLoading: state.usersLoading.filter(({ username }) => (username !== action.username)),
        error: action.error,
        users: testUsers,
      };
    default:
      return state;
  }
};
