import { Button } from "@/components/Button";
import { Button2 } from "@/components/Button2";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button>
        <Link href={"/one"}>1번 버튼만 사용하는 페이지로 이동</Link>
      </Button>
      <Button2>2번 버튼 사용</Button2>
    </main>
  );
}
