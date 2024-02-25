import { describe, expect, test } from 'vitest'
import { getPagination } from './getPagination'

describe('ページネーションが指定の数だけ受け取れるか', () => {
	// 画面サイズがPCの場合（表示上限=9）
	test('ページネーションが表示上限以下の場合', () => {
		expect(getPagination(2, 1, true)).toStrictEqual([1, 2])
	})

	test('ページネーションが表示上限まで表示されるか', () => {
		expect(getPagination(9, 1, true)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})

	test('"現在ページ=表示上限"の場合に上限を超えてページネーションが表示されてしまわないか', () => {
		expect(getPagination(9, 9, true)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})

	test('ページネーションの最大値が表示上限を超えた場合に表示上限を超えて表示されてしまわないか', () => {
		expect(getPagination(12, 1, true)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})

	test('現在ページがページネーションの右に寄る場合', () => {
		expect(getPagination(12, 9, true)).toStrictEqual([4, 5, 6, 7, 8, 9, 10, 11, 12])
	})

	// 画面サイズがタブレット or モバイルの場合（表示上限=5）
	test('ページネーションが表示上限以下の場合', () => {
		expect(getPagination(2, 1, false)).toStrictEqual([1, 2])
	})

	test('ページネーションが表示上限まで表示されるか', () => {
		expect(getPagination(5, 1, false)).toStrictEqual([1, 2, 3, 4, 5])
	})

	test('"現在ページ=表示上限"の場合に上限を超えてページネーションが表示されてしまわないか', () => {
		expect(getPagination(5, 5, false)).toStrictEqual([1, 2, 3, 4, 5])
	})

	test('ページネーションの最大値が表示上限を超えた場合に表示上限を超えて表示されてしまわないか', () => {
		expect(getPagination(7, 1, false)).toStrictEqual([1, 2, 3, 4, 5])
	})

	test('現在ページがページネーションの右に寄る場合', () => {
		expect(getPagination(7, 6, false)).toStrictEqual([3, 4, 5, 6, 7])
	})
})
