import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Litepaper from "../components/Landing/Litepaper";
import Container from "../components/Landing/Container";

const IndexPage = () => (
  <Container>
    <Hero />
    <About />
    <Litepaper />
  </Container>
);

export default IndexPage;
