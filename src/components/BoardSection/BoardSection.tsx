import API from "@aws-amplify/api";
import React from "react";
import styled from "styled-components";
import { CustomDate } from "../../Mocks/items";
import { SectionType } from "../Board/Board";
import TaskTile from "../TaskTile";
import TaskTileGhost from "../TaskTileGhost";



export interface BoardSectionPropTypes {
  section: SectionType;
  onTaskDrop?: () => void;
  onTaskDragStart?: (taskId: string) => void;
  onSectionTileDragOver?: (sectionId: string) => void;
  onAddNewTaskClick?: (sectionId: string) => void;
  onNewTaskFieldChange?: ({taskId, title, asigneeId, startDate, endDate}:{taskId: string,title?: string, asigneeId?: string, startDate?: CustomDate, endDate?: CustomDate}) => void;
  dropSectionId?: string;
  onTaskUpdate: (data: {name?: string, points?: number, id?: string}) => void
}

const BREAKPOINTS = {
  small: {
   max: '376px',
  },
  medium: {
    min: '377px',
    max: '768px'
  },
  large: {
    min: '769px',
    max: '1024px'
  }
}

const BoardSectionWrapper = styled.div`
  height: 100%;
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-basis: 20%;

  &:hover {
    border: 2px solid;
    border-color: ${(props) => props.theme.border};
  }

  font-size: 16px;
  text-align: left;

  @media (max-width: ${BREAKPOINTS.small.max}) {
    flex-basis: 50%;
    min-width: 50%;
  }

  @media (min-width: ${BREAKPOINTS.medium.min}) and  (max-width: ${BREAKPOINTS.medium.max}){
    flex-basis: 30%;
    min-width: 30%;
  }

  @media  (min-width: ${BREAKPOINTS.large.min}) and  (max-width: ${BREAKPOINTS.large.max}){
    flex-basis: 25%;
    min-width: 25%;
  }
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


const TaskOverflowWrapper = styled.div`
  padding-right: 10px;
  margin-right: -10px;
  overflow: scroll;
  scroll-behavior: smooth;
  height: 100%;
`

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
  onAddNewTaskClick,
  onNewTaskFieldChange,
  dropSectionId,
  onTaskUpdate
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <BoardSectionWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="BoardSectionWrapper"
    >
      <SectionTop data-testid="BoardSectionTop">
        <SectionTitle>{section.name}</SectionTitle>
      </SectionTop>
      <TaskOverflowWrapper>
      <TasksWrapper
        data-testid="BoardSectionTasks"
        onDragEnter={() => {
          // onSectionTileDragOver(section.id);
        }}
      >
        {section.tasks &&
          section.tasks.map((task) => (
            <TaskTile
              key={task.id}
              // onTaskDrop={onTaskDrop}
              // onTaskDragStart={onTaskDragStart}
              // onNewTaskFieldChange={onNewTaskFieldChange}
              task={task}
              onTaskEdit={onTaskUpdate}
            />
          ))}
        {dropSectionId === section.id && <TaskTileGhost />}
        {isActive && <TaskTile  onTaskEdit={onTaskUpdate}/>}
        {hovered && (
          <AddTaskField onClick={() => setIsActive(true)}>
            Add Task +
          </AddTaskField>
        )}
      </TasksWrapper>
      </TaskOverflowWrapper>
    </BoardSectionWrapper>
  );
};

export default BoardSection;
