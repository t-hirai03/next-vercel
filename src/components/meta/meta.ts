const title = 'Portfolio'
const descriptionText = 'Nextjs + TypeScript'

const pages = [
  {
    url: '/',
    title,
    description: descriptionText,
  },
  {
    url: '/login',
    title: `ログイン | ${title}`,
    description: descriptionText,
  },
  {
    url: '/customers/mypage',
    title: `マイページ | ${title}`,
    description: descriptionText,
  },
]

export default pages
