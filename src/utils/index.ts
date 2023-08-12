export {
  DEFAULT_TOAST_OPTIONS,
  DEFAULT_WRAPPER_OPTIONS,
  GAP,
  TIME_BEFORE_UNMOUNT,
  TOAST_LIFETIME,
  TOAST_WIDTH,
  VIEWPORT_OFFSET,
} from "./constants";
export { Observer, generateId } from "./observer";

export const createOptionsObject = <T>(objOne: T, objTwo: Partial<T>): T => {
  const obj: Record<string, any> = {};

  Object.keys({ ...objOne, ...objTwo }).map((k) => {
    obj[k] = (objTwo as any)[k] ?? (objOne as any)[k];
  });

  const finalObj = Object.freeze(obj) as T;

  return finalObj;
};
