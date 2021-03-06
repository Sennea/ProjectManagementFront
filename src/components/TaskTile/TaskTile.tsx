import React from "react";
import styled from "styled-components";
import { ThemePropTypes } from "../../App";
import { Task, Status, Priority, CustomDate, State } from "../../Mocks/items";

interface TaskTilePropTypes {
  task: Task;
  onTaskDragStart: (taskId: string) => void;
  onTaskDrop: () => void;
  onNewTaskFieldChange: ({taskId, title, asigneeId, startDate, endDate}:{taskId: string,title?: string, asigneeId?: string, startDate?: CustomDate, endDate?: CustomDate}) => void;
}

const TaskTileWrapper = styled.div<{
  theme: ThemePropTypes;
  taskState?: State;
}>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.border};
  border-radius: 5px;
  margin: 10px;
  cursor: grab;
  background: ${(props) =>
    props.taskState === "completed" ? props.theme.darkBg : props.theme.lightBg};

  &:hover {
    border: 1px solid white;
  }
`;

const TaskSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  align-content: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TaskCheckBox = styled.div<{ theme: ThemePropTypes; taskState?: State }>`
  border-radius: 50%;
  border: 2px solid gray;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 8px;
  font-weight: 800;
  border-color: ${(props) => props.theme.border};
  color: ${(props) =>
    props.taskState === "completed"
      ? props.theme.fontSecondary
      : props.theme.font};
`;

const TaskTitle = styled.h2<{ theme: ThemePropTypes; taskState?: State }>`
  padding: 0;
  margin: 0;
  font-size: 16px;
  margin-left: 10px;
  color: ${(props) =>
    props.taskState === "completed"
      ? props.theme.fontSecondary
      : props.theme.font};
`;

const colorMapper = {
  Low: "pink",
  Medium: "violetBlue",
  High: "orange",
  "At risk": "pink",
  "Too late": "brown",
  Done: "green",
};

const TaskInfo = styled.div<{ text?: Status | Priority }>`
  background: ${(props) =>
    props.text && props.theme.accents[colorMapper[props.text]]};
  border-radius: 5px;
  padding: 3px;
  margin-right: 5px;
`;

const TaskUser = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  object-fit: contain;
  overflow: hidden;
  margin-right: 10px;
`;

const TaskUserGhost = styled.div`
  border-radius: 50%;
  border: 1px dashed;
  border-color: ${(props) => props.theme.border};
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const TaskDate = styled.p`
  margin: 0;
  padding: 0;
`;

const TaskTitleInput = styled.input`
    background: inherit;
    border: none;
    margin-left: 10px;
    color: inherit;
    outline: none;

    ::placeholder {
      color: inherit
    }
`

const TaskTile: React.FC<TaskTilePropTypes> = ({
  task,
  onTaskDragStart,
  onTaskDrop,
  onNewTaskFieldChange
}) => {
  const dateFormatter = ({startDate, endDate}: {startDate?: CustomDate, endDate: CustomDate}) =>{
    const formatMonth = (month: number) => month.toString().length === 1
    ? `0${month}`
    : month;

    if( startDate ) {
      return startDate.month !== endDate.month ? `${startDate.day}.${formatMonth(startDate.month)} - ${endDate.day}.${formatMonth(endDate.month)}` : `${startDate.day} - ${endDate.day}.${formatMonth(endDate.month)}`
    }
    return `${endDate.day}.${formatMonth(endDate.month)}`;
  }
  const handleDragStart = () => {
    onTaskDragStart(task.id);
  };

  const handleDrop = () => {
    onTaskDrop();
  };

  const handleNewTaskFieldChange = ({ title, asigneeId, startDate, endDate}:{title?: string, asigneeId?: string, startDate?: CustomDate, endDate?: CustomDate}) => {
    onNewTaskFieldChange({taskId: task.id, title, asigneeId, startDate, endDate})
  }

  return (
    <TaskTileWrapper
      taskState={task.state}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDrop}
      data-testid="TaskTileWrapper"
    >
      <TaskSection>
        <TaskCheckBox taskState={task.state}>
          <span>???</span>
        </TaskCheckBox>
        {task.title && <TaskTitle taskState={task.state}>{task.title}</TaskTitle>}
        {!task.title && <TaskTitleInput type="text" placeholder="Type task name" onBlur={(e) => handleNewTaskFieldChange({title: e.target.value})}></TaskTitleInput>}
      </TaskSection>
      <TaskSection>
        {[task.priority, task.status]
          .filter((t) => t)
          .map((text, i) => (
            <TaskInfo key={i} text={text}>
              {text}
            </TaskInfo>
          ))}
      </TaskSection>
      <TaskSection>
        {task.asignee ? (
          task.asignee.map((user) => <TaskUser key={user.id} src={user.icon} />)
        ) : (
          <TaskUserGhost />
        )}
        {task.endDate && <TaskDate>{dateFormatter({startDate:task.startDate, endDate: task.endDate})}</TaskDate>}
        {!task.endDate && <TaskUserGhost />}
      </TaskSection>
    </TaskTileWrapper>
  );
};

export default TaskTile;
