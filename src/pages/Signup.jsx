import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const PageContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
`;

export default function Signup() {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="Signup" description="Generic Signup Screen" />
      <h1>Sign Up</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Register</Button>
      </Form>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </PageContainer>
  );
}
