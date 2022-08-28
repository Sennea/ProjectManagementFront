import API from "@aws-amplify/api";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  createSection as createSectionMutation,
  createTask as createTaskMutation,
  updateTask as updateTaskMutation,
} from "../../graphql/mutations";
import { getBoard, listSections, listTasks } from "../../graphql/queries";
import BoardSection from "../BoardSection";
import SectionPlaceholder from "../SectionPlaceholder";

export interface Project {
  id?: string;
  name: string;
}

interface ProjectSectionsPropTypes {}

const ProjectSectionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export interface Task {
  title: string;
  project?: Project;
}

const ProjectSections: React.FC<ProjectSectionsPropTypes> = ({}) => {
  console.log("DANKADNKWdaw", useParams());
  const { boardId } = useParams();
  const sectionTitleEl = React.useRef<HTMLInputElement>(null);
  const [sections, setSections] = React.useState<any>([]);
  const [board, setBoard] = React.useState<any>([]);
  const [tasks, setTasks] = React.useState<any>([]);

  React.useEffect(() => {
    // fetchBoard();
    fetchTasks();
    fetchSections();
    console.log("PROJECT ", sections);
    console.log("TAAS ", tasks);
  }, []);

  const fetchTasks = async () => {
    const apiData = (await API.graphql({
      query: listTasks,
    })) as any;
    const fetchedBoard = apiData.data.listTasks.items;
    setTasks(fetchedBoard);
  };

  const fetchBoard = async () => {
    const apiData = (await API.graphql({
      query: getBoard,
      variables: { id: boardId },
    })) as any;
    const fetchedBoard = apiData.data.getBoard;
    setBoard(fetchedBoard);
  };

  const fetchSections = async () => {
    const apiData = (await API.graphql({
      query: listSections,
      variables: { filter: { boardID: { eq: boardId } } },
    })) as any;
    console.log("DAMWDMALW ", apiData);
    const fetchedSections = apiData.data.listSections.items;
    console.log("FETHCHEDE SECTIONS ", fetchedSections.length);

    fetchedSections && setSections(fetchedSections);
  };

  const createSection = async ({ name }: { name: string }) => {
    const data = {
      name,
      boardID: boardId,
      position: sections.length,
    };
    await API.graphql({
      query: createSectionMutation,
      variables: { input: data },
    });
    setSections([...sections, data]);
  };

  const updateTask =
    (sectionId: string) =>
    async ({ name, id }: { name?: string; id?: string }) => {
      console.log("NAME ", name, "ID ", id, "SECTIONSID", sectionId);
      const data = {
        title: name,
        sectionID: sectionId,
      };
      if (id) {
        Object.assign(data, { id });
        await API.graphql({
          query: updateTaskMutation,
          variables: { input: data },
        });
      } else {
        console.log("EEE ", data);
        await API.graphql({
          query: createTaskMutation,
          variables: { input: data },
        });
      }
      // @ts-ignore
      const mSection = sections.find((s) => s.id === sectionId);
      mSection.task.items = [data];
      console.log("M SEC ", mSection);
      setSections([...sections, mSection]);
    };

  return (
    <ProjectSectionsWrapper data-testid="ProjectSectionsWrapper">
      <SectionPlaceholder onAdd={createSection} />
      {sections.map((s: any) => (
        <BoardSection key={s.id} section={s} onTaskUpdate={updateTask(s.id)} />
      ))}
    </ProjectSectionsWrapper>
  );
};

export default ProjectSections;
