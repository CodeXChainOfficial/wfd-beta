import { useRouter } from "next/router";
import { useEffect } from "react";

export default function InvestPage() {
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: "/invest/step1",
      query: {
        project_id: 1,
      },
    });
  }, []);
}
