import { ReactElement } from "react";
import Layout from "@/components/layout";
import About from "@/components/about";

export default function Index() {
  return (
    <>
      <Layout>
        <div className="text-white">
          <About />
        </div>
      </Layout>
    </>
  );
}
