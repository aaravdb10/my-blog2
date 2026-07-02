import "@theme-toggles/react/css/Lightbulb.css";
import { Lightbulb } from "@theme-toggles/react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    outline: none;
    
    &:focus {
      outline: none;
    }
    
    &:focus-visible {
      outline: none;
    }
  }
  
  button {
    outline: none;
    border: none;
    background: transparent;
    
    &:focus {
      outline: none;
      box-shadow: none;
    }
    
    &:focus-visible {
      outline: none;
    }
  }
`;

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <ToggleWrapper>
      <Lightbulb 
        duration={750} 
        toggled={darkMode}
        toggle={setDarkMode}
      />
    </ToggleWrapper>
  );
}
