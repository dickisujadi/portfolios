import { ReactElement } from "react";
import Layout from "@/components/layout";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Index() {
  return (
    <>
      <Layout>
        <section key="about">
          <About />
        </section>
        <section key="projects">
          <Projects />
        </section>
      </Layout>
    </>
  );
}
