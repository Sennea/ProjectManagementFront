import React from "react";
import styled from "styled-components";
import { Task, Status, Priority, CustomDate, State } from "../../Mocks/items";

interface TaskTilePropTypes {
  task: Task;
  onTaskDragStart: (taskId: string) => void;
  onTaskDrop: () => void;
}

const TaskTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
  cursor: grab;
  background: ${(props: { state?: State }) =>
    props.state === "completed" ? `rgb(25, 4, 43)` : `rgb(64, 11, 110)`};

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

const TaskCheckBox = styled.div`
  border-radius: 50%;
  border: 2px solid gray;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 8px;
  font-weight: 800;
  border-color: ${(props: { state?: State }) =>
    props.state === "completed" ? `rgb(2, 75, 0)` : `gray`};
  color: ${(props: { state?: State }) =>
    props.state === "completed" ? `rgb(2, 75, 0)` : `gray`};
`;

const TaskTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 16px;
  margin-left: 10px;
  color: ${(props: { state?: State }) =>
    props.state === "completed" ? `rgb(2, 75, 0)` : `gray`};
`;

const colorMapper = {
  Low: "Green",
  Medium: "Black",
  High: "Blue",
  "At risk": "Red",
  "Too late": "Blue",
  Done: "Cyan",
};

const TaskInfo = styled.div`
  background: ${(props: { text?: Status | Priority }) =>
    props.text && colorMapper[props.text]};
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
  border: 1px gray dashed;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const TaskDate = styled.p`
  margin: 0;
  padding: 0;
`;

const TaskTile: React.FC<TaskTilePropTypes> = ({
  task,
  onTaskDragStart,
  onTaskDrop,
}) => {
  const dateFormatter = (startDate: CustomDate, endDate: CustomDate) =>
    `${startDate.day} - ${endDate.day}.${
      endDate.month.toString().length === 1
        ? `0${endDate.month}`
        : endDate.month
    }`;
  const handleDragStart = () => {
    onTaskDragStart(task.id);
  };

  const handleDrop = () => {
    onTaskDrop();
  };

  return (
    <TaskTileWrapper
      state={task.state}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDrop}
      data-testid="TaskTileWrapper"
    >
      <TaskSection>
        <TaskCheckBox state={task.state}>
          <span>√</span>
        </TaskCheckBox>
        <TaskTitle state={task.state}>{task.title}</TaskTitle>
      </TaskSection>
      <TaskSection>
        {[task.priority, task.status]
          .filter((t) => t)
          .map((text) => (
            <TaskInfo text={text}>{text}</TaskInfo>
          ))}
      </TaskSection>
      <TaskSection>
        {task.asignee ? (
          task.asignee.map((user) => <TaskUser src={user.icon} />)
        ) : (
          <TaskUserGhost />
        )}
        <TaskDate>{dateFormatter(task.startDate, task.endDate)}</TaskDate>
      </TaskSection>
    </TaskTileWrapper>
  );
};

export default TaskTile;
