import { RootState } from '../store/store'

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState
  }
}
