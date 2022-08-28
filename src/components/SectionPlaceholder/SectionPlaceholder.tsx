import React from "react";
import styled from "styled-components";

interface SectionPlaceholderPropTypes {
  onAdd: ({ name }: { name: string }) => void;
}

const NonActiveWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const SectionPlaceholderWrapper = styled.div`
  background: gray;
  border-radius: 5px;
  border: solid 2px black;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-basis: 30%;
  padding: 10px;
  margin: 5px;
`;

const SectionPlaceholder: React.FC<SectionPlaceholderPropTypes> = ({
  onAdd,
}) => {
  const [isActive, setIsActive] = React.useState(false);

  const titleEl = React.useRef<HTMLInputElement>(null);

  const handleNewSectionClick = () => {
    if (!titleEl.current || !titleEl.current.value) return;
    onAdd({ name: titleEl.current.value });
    titleEl.current.value = "";
  };

  return (
    <SectionPlaceholderWrapper data-testid="SectionPlaceholderWrapper">
      {!isActive && (
        <NonActiveWrapper onClick={() => setIsActive(true)}>+</NonActiveWrapper>
      )}
      {isActive && (
        <div>
          <input ref={titleEl} placeholder="Provide section name"></input>
          <button onClick={handleNewSectionClick}>Create!</button>
        </div>
      )}
    </SectionPlaceholderWrapper>
  );
};

export default SectionPlaceholder;
