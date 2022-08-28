import API from "@aws-amplify/api";
import React from "react";
import styled from "styled-components";
import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
} from "../../graphql/mutations";
import { listProjects } from "../../graphql/queries";
import NewProjectPlaceholder from "../NewProjectPlaceholder";
import { Project } from "../ProjectBoard/ProjectBoard";
import ProjectPlaceholder from "../ProjectPlaceholder";

interface HomePropTypes {}

const HomeWrapper = styled.div``;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const Home: React.FC<HomePropTypes> = ({}) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  React.useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const apiData = (await API.graphql({ query: listProjects })) as any;
    setProjects(apiData.data.listProjects.items);
  };

  const createNewProject = async ({ name }: { name: string }) => {
    const data = {
      name,
    };
    await API.graphql({
      query: createProjectMutation,
      variables: { input: data },
    });
    setProjects([...projects, data]);
  };

  const deleteProject = async ({ id }: { id?: string }) => {
    if (!id) return;
    const newProjectsArray = projects.filter(
      (project: any) => project.id !== id
    );
    setProjects(newProjectsArray);
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
  };
  return (
    <HomeWrapper data-testid="HomeWrapper">
      <div>
        <h1>Your projects</h1>
        <ProjectsWrapper>
          {projects.map((project: Project) => (
            <ProjectPlaceholder
            link={`/projects/${project.id}/boards`}
              key={project.id}
              project={project}
              onDeleteClick={deleteProject}
            />
          ))}
          <NewProjectPlaceholder
            onAdd={createNewProject}
          ></NewProjectPlaceholder>
        </ProjectsWrapper>
      </div>
    </HomeWrapper>
  );
};

export default Home;
