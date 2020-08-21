import { Store } from '@/store';

declare module '@vue/runtime-core' {
  interface ComponenetCustomProperties {
    $store: Store;
  }
}
