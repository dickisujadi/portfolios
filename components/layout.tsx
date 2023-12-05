import { ReactNode, useEffect } from "react";
import Background from "./background";
import "../styles.css";
import TagManager from "react-gtm-module";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gtmId) TagManager.initialize({ gtmId });
  }, []);
  return (
    <>
      <main className="text-white">
        <Background />
        {children}
      </main>
    </>
  );
}
