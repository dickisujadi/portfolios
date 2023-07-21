import { ReactNode } from "react";
import Background from "./background";
import "../styles.css";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="h-[300vh]">
        <Background />
        {children}
      </main>
    </>
  );
}
