import Image from "next/image";
import { Inter } from "next/font/google";
import Board from "@/Components/board/board";
import Castle from "@/Components/castle/castle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Board/>
    </>
  );
}
