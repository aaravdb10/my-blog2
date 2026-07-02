import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const PageContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  line-height: 1.6;
  font-size: 1.1rem;
`;

export default function About() {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="About" description="Generic about template" />
      <Title>About This Project</Title>
      <Content>
        <p>
          This is a public code repository demonstrating the architecture and layout of the project.
          The primary content and custom styling are hosted privately.
        </p>
      </Content>
    </PageContainer>
  );
}
