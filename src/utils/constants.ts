import type { ToastOptions, ToasterProps } from '../types';
import { Theme, VisibleToast } from '../types';

const PER_PAGE = 12;
const VIEWPORT_OFFSET = '32px';
const TOAST_WIDTH = 360;
const GAP = 14;
const TOAST_LIFETIME = 5000; // 5s default;
const TIME_BEFORE_UNMOUNT = 200; // animation duration;

// Toast component default options
const DEFAULT_TOAST_OPTIONS: ToastOptions = {
  class: '',
  descriptionClassName: '',
  style: {},
};

// Default Wrapper component options
const DEFAULT_WRAPPER_OPTIONS: Required<ToasterProps> = {
  position: 'bottom-right',
  hotkey: ['altKey', 'KeyT'],
  expand: false,
  closeButton: false,
  class: '',
  offset: VIEWPORT_OFFSET,
  theme: Theme.default,
  richColors: false,
  duration: TOAST_LIFETIME,
  style: {},
  visibleToasts: VisibleToast.default,
  toastOptions: DEFAULT_TOAST_OPTIONS,
};

export {
  DEFAULT_TOAST_OPTIONS,
  DEFAULT_WRAPPER_OPTIONS,
  GAP,
  PER_PAGE,
  TIME_BEFORE_UNMOUNT,
  TOAST_LIFETIME,
  TOAST_WIDTH,
  VIEWPORT_OFFSET,
};
