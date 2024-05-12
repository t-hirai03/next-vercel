import Image from "next/image";
import styles from "./index.module.scss";
import { Button } from "../ui/button";

// トップページのコンポーネント
const Top = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click</Button>
    </div>
  );
};

export default Top;
