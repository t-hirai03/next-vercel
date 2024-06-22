import styles from "./index.module.scss";
import { salmonRunData } from "@/types";
import { useFetchSalmonRun } from "./index.hooks";
import Image from "next/image";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

const Top = () => {
  const salmonRunData: salmonRunData[] | null = useFetchSalmonRun();

  return (
    <div className="l-wrapper">
      <section>
        <h2 className={styles.title}>スプラトゥーン サーモンランスケジュール</h2>
        <ul className={styles.list}>
          {salmonRunData &&
            salmonRunData.map((data, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.content}>
                  <Image
                    src={data.stage.image}
                    alt={data.stage.name}
                    width={800}
                    height={450}
                    className={styles.thumbnail}
                    priority={true}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.stage}>{data.stage.name}</h3>
                    <time className={styles.time}>
                      スケジュール:{" "}
                      {format(new Date(data.start_time), "yyyy/MM/dd HH:mm", { locale: ja })} -{" "}
                      {format(new Date(data.end_time), "yyyy/MM/dd HH:mm", { locale: ja })}
                    </time>
                    <p className={styles.run}>Big Run: {data.is_big_run ? "あり" : "なし"}</p>
                    <h4 className={styles.boss}>Boss: {data.boss.name}</h4>
                    <h4>武器一覧:</h4>
                    <ul className={styles.weapons}>
                      {data.weapons.map((weapon, wIndex) => (
                        <li key={wIndex} className={styles.item}>
                          <Image
                            src={weapon.image}
                            alt={weapon.name}
                            width={145}
                            height={145}
                            className={styles.icon}
                            priority={true}
                          />
                          <span className={styles.name}>{weapon.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Top;
