import styles from "./index.module.scss";
import { CreditForm } from "@/components/credit-form";

// トップページのコンポーネント
const Top = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreditForm />
    </div>
  );
};

export default Top;
