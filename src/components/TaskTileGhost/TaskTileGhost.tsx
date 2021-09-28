import React from "react";
import styled from "styled-components";

const TaskTileGhostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: grab;
  box-shadow: 2px 2px ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.shadow};
  min-height: 108px;
`;

const TaskTileGhost: React.FC = () => {
  return (
    <TaskTileGhostWrapper data-testid="TaskTileGhostWrapper"></TaskTileGhostWrapper>
  );
};

export default TaskTileGhost;
