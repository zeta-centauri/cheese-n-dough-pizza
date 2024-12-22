import { useEffect, useRef, useState } from "react";

import arrowImg from "/assets/img/svg/arrow-down.svg";
import { DropdownOption, DropdownProperty } from "../../../../types";
import { Wrapper, Label, ListItem, List, ArrowIcon } from "./Dropdown.styled";

interface DropdownProps {
  currentValue: DropdownProperty;
  options: DropdownOption[];
  onChange: (value: string) => void;
}

const Dropdown = ({ currentValue, options, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current!)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <Wrapper ref={sortRef}>
      <Label onClick={() => setIsOpen(!isOpen)}>
        <p>{options.find((option) => option.property == currentValue)?.name}</p>
        <ArrowIcon $isOpen={isOpen} src={arrowImg} alt="arrow" />
      </Label>

      {isOpen && (
        <List>
          {options.map((option) => (
            <ListItem onClick={() => handleOptionClick(option.property)}>
              {option.name}
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Dropdown;
