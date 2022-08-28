import React, { useState } from "react";
import styled from "styled-components";

interface NewProjectPlaceholderPropTypes {
  onAdd: ({name}: {name: string}) => void;
}

const NewProjectPlaceholderWrapper = styled.li`
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

const NonActiveWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const NewProjectPlaceholder: React.FC<NewProjectPlaceholderPropTypes> = ({
  onAdd,
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const titleEl = React.useRef<HTMLInputElement>(null);
  const handleNewProjectClick = () => {
    if(!titleEl.current || !titleEl.current.value )return;
    onAdd({name: titleEl.current.value})
    titleEl.current.value="";
  }

  return (
    <NewProjectPlaceholderWrapper data-testid="NewProjectPlaceholderWrapper">
      {!isActive && (
        <NonActiveWrapper onClick={() => setIsActive(true)}>+</NonActiveWrapper>
      )}
      {isActive && (
        <div>
          <input ref={titleEl} placeholder="Provide project name"></input>
          <button onClick={handleNewProjectClick}>Create!</button>
        </div>
      )}
    </NewProjectPlaceholderWrapper>
  );
};

export default NewProjectPlaceholder;
