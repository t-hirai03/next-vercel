import { useEffect, useState } from "react";
import { salmonRunData } from "@/types";
import cookie from 'js-cookie'

export const useFetchSalmonRun = () => {
  const [salmonRunData, setSalmonRunData] = useState<salmonRunData[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      // corsを回避する設定を入れる
      const req = new Request("https://spla3.yuu26.com/api/coop-grouping/schedule", {
        method: "GET"
      });
      cookie.set('SameSite', 'None', { secure: true });

      try {
        const res = await fetch(req);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);

        if (isMounted) {
          setSalmonRunData(data.results);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return salmonRunData ?? [];
};
