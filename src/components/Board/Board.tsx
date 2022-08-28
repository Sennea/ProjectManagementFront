import React from "react";
import styled from "styled-components";
import { CustomDate, Task } from "../../Mocks/items";
import { orderObjectByKeys } from "../../utils";
import BoardSection from "../BoardSection";

export interface SectionType {
  name: string;
  position: number;
  taskIds?: string[];
  tasks?: Task[];
  id: string;
}

export interface BoardPropTypes {
  sections: {[key: string]: SectionType};
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
  console.log('BOARD ', sections)
  const ordered:{[key: string]: SectionType} = orderObjectByKeys(sections);

  return (
    <BoardWrapper data-testid="BoardWrapper">{
      Object.values(ordered).map(section => <BoardSection
        key={section.id}
        dropSectionId={dropSectionId}
        section={section}
        onTaskDrop={onTaskDrop}
        onTaskDragStart={onTaskDragStart}
        onSectionTileDragOver={onSectionTileDragOver}
        onNewTaskFieldChange={onNewTaskFieldChange}
        onAddNewTaskClick={onAddNewTaskClick}
        onTaskUpdate={jest.fn()}
      />)
    }
    </BoardWrapper>
  );
};

export default Board;
