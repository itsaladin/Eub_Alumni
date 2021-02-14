import { User } from '@/models/user';
import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

export const RootStore = types
  .model('RootStore', {
    user: User,
    selectedLocationId: types.maybe(types.string),
    hydrated: types.boolean,
  })
  .actions((self) => ({
    hydrate() {
      self.hydrated = true;
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
