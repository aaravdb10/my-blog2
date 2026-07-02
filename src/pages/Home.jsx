import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import blogs from "../data/blogs";

const PageContainer = styled(motion.div)`
  padding: 6rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text || "#111"};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="Home" description="Generic homepage template" />
      <Hero>
        <Title>Welcome to My Blog</Title>
        <Subtitle>A public minimalist showcase space.</Subtitle>
        <Link to="/blogs" style={{ textDecoration: "underline", color: "inherit" }}>
          View all posts
        </Link>
      </Hero>
    </PageContainer>
  );
}
