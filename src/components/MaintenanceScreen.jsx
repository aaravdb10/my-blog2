import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.background || "#fff"};
  color: ${({ theme }) => theme.text || "#111"};
`;

export default function MaintenanceScreen() {
  return (
    <Container>
      <h1>Under Maintenance</h1>
      <p style={{ marginTop: "1rem", color: "#666" }}>
        We are currently performing scheduled maintenance. Please check back later!
      </p>
    </Container>
  );
}
