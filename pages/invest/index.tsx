import { useRouter } from "next/router";
import { useEffect } from "react";

export default function InvestPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/invest/step1");
  }, []);
}
