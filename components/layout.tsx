import { ReactNode } from "react";
import Background from "./background";
import "../styles.css";
import { GoogleAnalyticsTracking } from "@/trackers/google";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <GoogleAnalyticsTracking />

      <main className="text-white">
        <Background />
        {children}
      </main>
    </>
  );
}
