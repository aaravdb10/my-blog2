import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const PageContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
`;

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent (this is a placeholder mock handler).");
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="Contact" description="Generic contact template" />
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="Message" required />
        <Button type="submit">Submit</Button>
      </Form>
      {status && <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>}
    </PageContainer>
  );
}
