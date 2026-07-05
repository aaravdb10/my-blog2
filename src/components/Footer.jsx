import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.background || "#fff"};
  border-top: 1px solid ${({ theme }) => theme.border || "#eee"};
  text-align: center;
  color: #666;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} iWrite. All rights reserved.</p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
        Made as a generic public blog skeleton.
      </p>
    </FooterContainer>
  );
}