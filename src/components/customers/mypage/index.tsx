import { useSession } from 'next-auth/react'
import Image from 'next/image'

const MyPage = () => {
  const { data: session } = useSession()

  return (
    <div className="l-wrapper">
      <h2>マイページ</h2>
      <p>ようこそ、{session?.user?.name}さん</p>
      <p>メールアドレス：{session?.user?.email}</p>
      <div>
        <Image
          src={session?.user?.image ?? ''}
          alt=""
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  )
}

export default MyPage
