import { describe, expect, test } from 'vitest';
import { range } from './range';

describe('指定範囲の数字リストを生成できるか', () => {
  test('start=1の場合', () => {
    expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('startが2以上の値から始まる場合', () => {
    expect(range(10, 14)).toStrictEqual([10, 11, 12, 13, 14]);
  });
});
