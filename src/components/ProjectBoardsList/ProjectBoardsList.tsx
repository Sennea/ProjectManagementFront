import API from "@aws-amplify/api";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  createBoard as createBoardMutation,
  deleteBoard as deleteBoardMutation,
} from "../../graphql/mutations";
import { listBoards } from "../../graphql/queries";
import NewProjectPlaceholder from "../NewProjectPlaceholder";
import ProjectPlaceholder from "../ProjectPlaceholder";

export interface Project {
  id?: string;
  name: string;
}

interface ProjectBoardsListPropTypes {}

const ProjectBoardsListWrapper = styled.div``;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";
export type TaskType = "BUG" | "TASK" | "USER_STORY" | "REOPENED_BUG" | "EPIC";

export interface Comment {
  id?: string;
  content: string;
}

export interface Task {
  id?: string;
  title: string;
  description?: string;
  assignee?: string[];
  priority?: TaskPriority;
  type?: TaskType;
  subtasks?: Task[];
  comments?: Comment[];
}

export interface Section {
  id?: string;
  name: string;
  position: number;
  task: Task[];
}

export interface Board {
  id?: string;
  name: string;
  sections?: Section[];
}

const ProjectBoardsList: React.FC<ProjectBoardsListPropTypes> = ({}) => {
  const { id: project } = useParams();
  console.log("HELLO ", project);

  const [boards, setBoards] = React.useState<Board[]>([]);
  React.useEffect(() => {
    console.log("HI");
    fetchProjectBoards();
  }, []);

  const fetchProjectBoards = async () => {
    // @ts-ignore
    const apiData = await API.graphql<any>({
      query: listBoards,
      variables: {filter: {projectID: {eq: project || '' }}},
    });
    setBoards(apiData.data.listBoards.items);
  };

  const createNewBoard = async ({ name }: { name: string }) => {
    const data = {
      name,
      projectID: project,
    };
    await API.graphql({
      query: createBoardMutation,
      variables: { input: data },
    });
    setBoards([...boards, data]);
  };

  const deleteBoard = async ({ id }: { id?: string }) => {
    if (!id) return;
    const newBoardsArray = boards.filter((project: any) => project.id !== id);
    setBoards(newBoardsArray);
    await API.graphql({
      query: deleteBoardMutation,
      variables: { input: { id } },
    });
  };

  console.log("DANWKDKANWD", project);

  return (
    <ProjectBoardsListWrapper data-testid="ProjectBoardsListWrapper">
      <div>
        <h1>Your boards</h1>
        <ProjectsWrapper>
          {boards.map((board: Project) => (
            <ProjectPlaceholder
              link={`/projects/${project}/boards/${board.id}`}
              key={board.id}
              project={board}
              onDeleteClick={deleteBoard}
            >
              <h2>{board.name}</h2>
              <button onClick={() => deleteBoard(board)}>Delete</button>
            </ProjectPlaceholder>
          ))}
          <NewProjectPlaceholder onAdd={createNewBoard}></NewProjectPlaceholder>
        </ProjectsWrapper>
      </div>
    </ProjectBoardsListWrapper>
  );
};

export default ProjectBoardsList;
