import { inject, computed } from 'vue';
import { storeKey } from './storePlugin';
import { store, type RootState } from './stores/store';

export const useDispath = () => store.dispatch;

export const useSelector = <State extends RootState = RootState>(
  fn: (state: State) => State[keyof State],
) => {
  const rootStore = inject(storeKey) as { state: RootState };
  return computed(() => fn(rootStore.state as State));
};
