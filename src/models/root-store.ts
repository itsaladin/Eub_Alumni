import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

export const RootStore = types
  .model('RootStore', {
    hydrated: types.boolean,
    token: types.maybe(types.string),
  })
  .actions((self) => ({
    hydrate() {
      self.hydrated = true;
    },
    setToken(s: string) {
      self.token = s;
    },
  }))
  .views((self) => ({
    get hydrateStatus() {
      return self.hydrated;
    },
  }));

export type RootStoreModel = Instance<typeof RootStore>;
export type RootStoreData = SnapshotOut<typeof RootStore>;
export type RootStoreStorage = SnapshotIn<typeof RootStore>;
