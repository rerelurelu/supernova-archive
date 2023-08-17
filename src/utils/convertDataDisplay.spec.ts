import { describe, expect, test } from 'vitest'
import { convertDateDisplay } from './convertDateDisplay'

describe("日付変換が「月(英略) 日, 年」の形に変換されるか", () => {
  const dateTime = [
    '2023-01-13T17:49:55.632Z',
    '2023-02-13T17:49:55.632Z',
    '2023-03-13T17:49:55.632Z',
    '2023-04-13T17:49:55.632Z',
    '2023-05-13T17:49:55.632Z',
    '2023-06-13T17:49:55.632Z',
    '2023-07-13T17:49:55.632Z',
    '2023-08-13T17:49:55.632Z',
    '2023-09-13T17:49:55.632Z',
    '2023-10-13T17:49:55.632Z',
    '2023-11-13T17:49:55.632Z',
    '2023-12-13T17:49:55.632Z',
  ] as const

  test("1月の変換", () => {
    expect(convertDateDisplay(dateTime[0])).toBe('Jan 13, 2023')
  })

  test("2月の変換", () => {
expect(convertDateDisplay(dateTime[1])).toBe('Feb 13, 2023')
  })

  test("3月の変換", () => {
expect(convertDateDisplay(dateTime[2])).toBe('Mar 13, 2023')
  })

  test("4月の変換", () => {
expect(convertDateDisplay(dateTime[3])).toBe('Apr 13, 2023')
  })

  test("5月の変換", () => {
expect(convertDateDisplay(dateTime[4])).toBe('May 13, 2023')
  })

  test("6月の変換", () => {
expect(convertDateDisplay(dateTime[5])).toBe('Jun 13, 2023')
  })

  test("7月の変換", () => {
expect(convertDateDisplay(dateTime[6])).toBe('Jul 13, 2023')
  })

  test("8月の変換", () => {
expect(convertDateDisplay(dateTime[7])).toBe('Aug 13, 2023')
  })

  test("9月の変換", () => {
expect(convertDateDisplay(dateTime[8])).toBe('Sep 13, 2023')
  })

  test("10月の変換", () => {
expect(convertDateDisplay(dateTime[9])).toBe('Oct 13, 2023')
  })

  test("11月の変換", () => {
expect(convertDateDisplay(dateTime[10])).toBe('Nov 13, 2023')
  })

  test("12月の変換", () => {
expect(convertDateDisplay(dateTime[11])).toBe('Dec 13, 2023')
  })
})
