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
  min-height: 300px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid;
    border-color: ${(props) => props.theme.border};
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
  overflow: scroll;
  scroll-behavior: smooth;
`;

const GrabWrapper = styled.div`
  cursor: grab;
`;

const AddTaskField = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;

const BoardSection: React.FC<BoardSectionPropTypes> = ({
  section,
  onTaskDrop,
  onTaskDragStart,
  onSectionTileDragOver,
  dropSectionId,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [newTask, setNewTask] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleNewTaskClick = () => {
    console.log("NEW TASK! ");
    setNewTask(true);
  };

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
              key={task.id}
              onTaskDrop={onTaskDrop}
              onTaskDragStart={onTaskDragStart}
              task={task}
            />
          ))}
        {dropSectionId === section.id && <TaskTileGhost />}
        {newTask && <TaskTileGhost />}
        {hovered && (
          <AddTaskField onClick={() => handleNewTaskClick()}>
            Add Task +
          </AddTaskField>
        )}
      </TasksWrapper>
    </BoardSectionWrapper>
  );
};

export default BoardSection;
