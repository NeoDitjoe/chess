import { Inter } from "next/font/google";
import Board from "@/Components/board/board";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Board/>
    </>
  );
}
