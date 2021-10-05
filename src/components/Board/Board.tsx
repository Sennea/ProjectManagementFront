import React from "react";
import styled from "styled-components";
import { CustomDate, Task } from "../../Mocks/items";
import BoardSection from "../BoardSection";

export interface SectionType {
  title: string;
  position: number;
  taskIds?: string[];
  tasks?: Task[];
  id: string;
}

export interface BoardPropTypes {
  sections: SectionType[];
  onTaskDrop: () => void;
  onTaskDragStart: (taskId: string) => void;
  onSectionTileDragOver: (sectionId: string) => void;
  onAddNewTaskClick: (sectionId: string) => void;
  onNewTaskFieldChange: ({taskId, title, asigneeId, startDate, endDate}:{taskId: string,title?: string, asigneeId?: string, startDate?: CustomDate, endDate?: CustomDate}) => void;
  dropSectionId?: string;
}

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const Board: React.FC<BoardPropTypes> = ({
  sections,
  onTaskDrop,
  onTaskDragStart,
  onSectionTileDragOver,
  onAddNewTaskClick,
  onNewTaskFieldChange,
  dropSectionId,
}) => {
  return (
    <BoardWrapper data-testid="BoardWrapper">
      {sections
        .sort((el) => el.position)
        .map((section) => (
          <BoardSection
            key={section.id}
            dropSectionId={dropSectionId}
            section={section}
            onTaskDrop={onTaskDrop}
            onTaskDragStart={onTaskDragStart}
            onSectionTileDragOver={onSectionTileDragOver}
            onNewTaskFieldChange={onNewTaskFieldChange}
            onAddNewTaskClick={onAddNewTaskClick}
          />
        ))}
    </BoardWrapper>
  );
};

export default Board;
