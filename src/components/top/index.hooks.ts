import { useEffect, useState } from "react";
import { salmonRunData } from "@/types";

export const useFetchSalmonRun = () => {
  const [salmonRunData, setSalmonRunData] = useState<salmonRunData[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const req = new Request("https://spla3.yuu26.com/api/coop-grouping/schedule", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-agent": "S3/1.0(twitter@missplatoon)",
        },
        credentials: "include",
        mode: "cors"
      });

      try {
        const res = await fetch(req);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

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
