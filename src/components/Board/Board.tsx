import React from "react";
import styled from "styled-components";
import { Task } from "../../Mocks/items";
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
  dropSectionId?: string;
}

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Board: React.FC<BoardPropTypes> = ({
  sections,
  onTaskDrop,
  onTaskDragStart,
  onSectionTileDragOver,
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
          />
        ))}
    </BoardWrapper>
  );
};

export default Board;
