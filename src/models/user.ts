import { Instance, SnapshotOut, types } from 'mobx-state-tree';

export interface UserResponse {
  token: string;
  id: number;
  email: string;
  nicename: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phone: string;
}

const UserInfo = types.model('UserInfo', {
  token: types.string,
  id: types.number,
  email: types.string,
  nicename: types.string,
  firstName: types.string,
  lastName: types.string,
  displayName: types.string,
  phone: types.string,
});

export const User = types
  .model('User', {
    details: types.maybe(UserInfo),
  })
  .actions((self) => ({
    logIn(user: UserResponse) {
      self.details = user;
    },
    logOut() {
      self.details = undefined;
    },
  }))
  .views((self) => ({
    get isLoggedIn() {
      return !!self.details;
    },
  }));

export type UserModel = Instance<typeof User>;
export type UserData = SnapshotOut<typeof User>;
