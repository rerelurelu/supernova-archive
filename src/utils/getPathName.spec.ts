import { describe, expect, test } from 'vitest'
import { getPathname } from './getPathname'

describe('現在開いているページのパス（ディレクトリ名）を取得できるか', () => {
  const paths = {
    home: '/',
    blogList: '/blog/',
    blogListWithIndex: '/blog/page/1',
    blogDetail: '/blog/renewal-my-portfolio-site/',
    about: '/about/',
    contact: '/contact/',
    noMatch: 'noMatch',
  }

  test('開いているページがHomeの場合', () => {
    expect(getPathname(paths.home)).toBe('home')
  })

  test('開いているページがBlog一覧の場合', () => {
    expect(getPathname(paths.blogList)).toBe('blog')
  })

  test('開いているページがBlog一覧かつページインデックスが2以上の場合', () => {
    expect(getPathname(paths.blogList)).toBe('blog')
  })

  test('開いているページがBlog詳細の場合', () => {
    expect(getPathname(paths.blogDetail)).toBe('blog')
  })

  test('開いているページがAboutの場合', () => {
    expect(getPathname(paths.about)).toBe('about')
  })

  test('開いているページがContactの場合', () => {
    expect(getPathname(paths.contact)).toBe('contact')
  })

  test('正規表現でマッチしなかった場合', () => {
    expect(getPathname(paths.noMatch)).toBe('')
  })
})
