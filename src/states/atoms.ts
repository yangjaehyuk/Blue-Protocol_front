import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const allNewsState = atom<any[]>({
  key: 'allNewsState',
  default: [],
});

export const recentNewsState = atom<any[]>({
  key: 'recentNewsState',
  default: [],
});
