import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SalmonRunData } from '@/types'

import { useFetchSalmonRun } from './index.hooks'
import styles from './index.module.scss'

const Splatoon = () => {
  const salmonRunData: SalmonRunData[] | null = useFetchSalmonRun()

  return (
    <section className={styles.splatoon}>
      <h2 className={styles.title}>スプラトゥーン サーモンランスケジュール</h2>
      <ul className={styles.list}>
        {salmonRunData &&
          salmonRunData.map((data) => (
            <li key={data.start_time} className={styles.item}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle className={styles.title}>
                    {data.stage.name}
                  </CardTitle>
                  <CardDescription>
                    {format(new Date(data.start_time), 'yyyy/MM/dd HH:mm', {
                      locale: ja,
                    })}{' '}
                    -{' '}
                    {format(new Date(data.end_time), 'yyyy/MM/dd HH:mm', {
                      locale: ja,
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={styles.thumbnail}>
                    <Skeleton className={styles.skeleton} />
                    <Image
                      src={data.stage.image}
                      alt={data.stage.name}
                      width={800}
                      height={450}
                      className={styles.image}
                      priority
                    />
                  </div>
                  <div className={styles.info}>
                    <div>
                      <p className={styles.description}>
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        ビッグラン
                      </p>{' '}
                      {data.is_big_run ? 'あり' : 'なし'}
                    </div>
                    <div>
                      <p className={styles.description}>
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        ボス
                      </p>{' '}
                      {data.boss.name}
                    </div>
                    <div>
                      <p className={styles.description}>
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        武器一覧
                      </p>
                      <ul className={styles.weapons}>
                        {data.weapons.map((weapon) => (
                          <li key={weapon.name} className={styles.weapons_item}>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Avatar className={styles.avatar}>
                                    <AvatarImage
                                      src={weapon.image}
                                      alt={weapon.name}
                                    />
                                    <AvatarFallback>?</AvatarFallback>
                                  </Avatar>
                                </TooltipTrigger>
                                <TooltipContent className={styles.tooltip}>
                                  {weapon.name}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Splatoon
