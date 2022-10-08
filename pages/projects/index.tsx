import React, { useEffect } from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Hero from "../../components/SeeProjects/Hero";
import UpcomingProject from "../../components/SeeProjects/UpcomingProject";
import ProjectAccelerate from "../../components/SeeProjects/ProjectAccelerated";
import ProjectActive from "../../components/SeeProjects/CompletedProject";

export default function Projects() {
  return (
    <Container>
      <Hero />
      <UpcomingProject />
      <ProjectAccelerate />
      <ProjectActive />
      <Footer />
    </Container>
  );
}
