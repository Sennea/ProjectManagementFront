import API from "@aws-amplify/api";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  createTask as createTaskMutation,
  deleteProject as deleteProjectMutation,
} from "../../graphql/mutations";
import { getProject } from "../../graphql/queries";
import NewProjectPlaceholder from "../NewProjectPlaceholder";
import ProjectPlaceholder from "../ProjectPlaceholder";

export interface Project {
  id?: string;
  name: string;
}

interface ProjectBoardPropTypes {}

const ProjectBoardWrapper = styled.div``;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export interface Task {
    title: string,
    project?: Project
}

const ProjectBoard: React.FC<ProjectBoardPropTypes> = ({}) => {
const { id } = useParams()
const taskTitleEl = React.useRef<HTMLInputElement>(null)
  const [project, setProject] = React.useState<Project>();
  const [tasks, setTasks] = React.useState<Task[]>([]);
  React.useEffect(() => {
    fetchProject();
    console.log('PROJECT ', project)
  }, []);

  const fetchProject = async () => {
    const apiData = (await API.graphql({ query: getProject, variables: { id }, })) as any;
    console.log('API DATA' , apiData)
    const project = apiData.data.getProject;
    setProject(project)
  };

  const createTask = async() => {
      if(!taskTitleEl.current || !taskTitleEl.current.value) return;
    const data = {
        title: taskTitleEl.current.value,
        project
      };
      console.log("DATA", data)
      await API.graphql({
        query: createTaskMutation,
        variables: { input: data },
      });
      setTasks([...tasks, data]);
  }


  return (
    <ProjectBoardWrapper data-testid="ProjectBoardWrapper">
      <div>
        {project && <h1>{project.name}</h1>}
        <div>
            <h1>Create task</h1>
            <input ref={taskTitleEl} placeholder="Provide task title"></input>
            <button onClick={createTask}>Create!</button>
        </div>
      </div>
    </ProjectBoardWrapper>
  );
};

export default ProjectBoard;
