import styles from "./index.module.scss";
import { salmonRunData } from "@/types";
import { useFetchSalmonRun } from "./index.hooks";
import Image from "next/image";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Splatoon = () => {
  const salmonRunData: salmonRunData[] | null = useFetchSalmonRun();

  return (
    <section className={styles.splatoon}>
      <h2 className={styles.title}>スプラトゥーン サーモンランスケジュール</h2>
      <ul className={styles.list}>
        {salmonRunData &&
          salmonRunData.map((data, index) => (
            <li key={index} className={styles.item}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle className={styles.title}>{data.stage.name}</CardTitle>
                  <CardDescription>
                    スケジュール:{" "}
                    {format(new Date(data.start_time), "yyyy/MM/dd HH:mm", { locale: ja })} -{" "}
                    {format(new Date(data.end_time), "yyyy/MM/dd HH:mm", { locale: ja })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={data.stage.image}
                    alt={data.stage.name}
                    width={800}
                    height={450}
                    className={styles.thumbnail}
                    priority={true}
                  />
                  <div>
                    <CardDescription>Big Run: {data.is_big_run ? "あり" : "なし"}</CardDescription>
                    <CardDescription>Boss: {data.boss.name}</CardDescription>
                    <CardDescription>武器一覧:</CardDescription>
                    <ul className={styles.weapons}>
                      {data.weapons.map((weapon, wIndex) => (
                        <li key={wIndex} className={styles.weapons_item}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Avatar className={styles.avatar}>
                                  <AvatarImage src={weapon.image} alt={weapon.name} />
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
                </CardContent>
              </Card>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Splatoon;
