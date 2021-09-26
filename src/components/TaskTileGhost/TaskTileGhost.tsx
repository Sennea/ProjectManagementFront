import React from "react";
import styled from "styled-components";

interface TaskTileGhostPropTypes {}

const TaskTileGhostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
  cursor: grab;
  background: #3a3a3a;
  min-height: 108px;

  &:hover {
    border: 1px solid white;
  }
`;

const TaskTileGhost: React.FC<TaskTileGhostPropTypes> = ({}) => {
  return (
    <TaskTileGhostWrapper data-testid="TaskTileGhostWrapper"></TaskTileGhostWrapper>
  );
};

export default TaskTileGhost;
