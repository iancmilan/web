import React from 'react'
import styled, { keyframes } from 'styled-components';

interface CheckboxProps {
  checked: boolean;
}

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: "pointer";
  margin-bottom: 1rem;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 2rem;
  height: 2rem;
  /* background: #f2f4f5; */
  position: absolute;
  top: 0;
  border: 1px solid #20B25D;
  border-radius: 0.2em;

  /* ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  } */

  /* ${Label}:hover & {
    background: #ccc;
  } */

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0;
    left: 0.55em;
    width: 35%;
    height: 70%;
    border: solid green;
    border-width: 0 1px 1px 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export default function Checkbox({ id, name, value, checked, onChange }) {
  return (
    <Label htmlFor={id}>
      <Input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
