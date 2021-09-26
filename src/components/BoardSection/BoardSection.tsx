import React from "react";
import styled from "styled-components";
import { SectionType } from "../Board/Board";
import TaskTile from "../TaskTile";
import TaskTileGhost from "../TaskTileGhost";

export interface BoardSectionPropTypes {
  section: SectionType;
  onTaskDrop: () => void;
  onTaskDragStart: (taskId: string) => void;
  onSectionTileDragOver: (sectionId: string) => void;
  dropSectionId?: string;
}

const BoardSectionWrapper = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid gray;
  }

  font-size: 16px;
  text-align: left;
`;

const SectionTop = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const SectionTitle = styled.h1`
  font-size: 22px;
  margin: 0;
`;

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GrabWrapper = styled.div`
  cursor: grab;
`;

const BoardSection: React.FC<BoardSectionPropTypes> = ({
  section,
  onTaskDrop,
  onTaskDragStart,
  onSectionTileDragOver,
  dropSectionId,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <BoardSectionWrapper
      draggable={isDragging}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="BoardSectionWrapper"
    >
      <SectionTop data-testid="BoardSectionTop">
        <SectionTitle>{section.title}</SectionTitle>
        {hovered && (
          <GrabWrapper
            onMouseOver={() => setIsDragging(true)}
            onMouseLeave={() => setIsDragging(false)}
          >
            =
          </GrabWrapper>
        )}
      </SectionTop>
      <TasksWrapper
        data-testid="BoardSectionTasks"
        onDragEnter={() => {
          onSectionTileDragOver(section.id);
        }}
      >
        {section.tasks &&
          section.tasks.map((task) => (
            <TaskTile
              onTaskDrop={onTaskDrop}
              onTaskDragStart={onTaskDragStart}
              task={task}
            />
          ))}
        {dropSectionId === section.id && <TaskTileGhost />}
      </TasksWrapper>
    </BoardSectionWrapper>
  );
};

export default BoardSection;
