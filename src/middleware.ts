/* eslint-disable-next-line */
export { default } from 'next-auth/middleware'

export const config = {
  // ログイン認証対象ページを設定
  matcher: ['/customers/mypage'],
}
