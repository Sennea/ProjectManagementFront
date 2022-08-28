import React from 'react';
import styled from 'styled-components';
import { Project } from '../ProjectBoard/ProjectBoard';

interface ProjectPlaceholderPropTypes {
    project: Project;
    onDeleteClick: ({id}:{id?: string}) => void;
    link: string;
}

const ProjectPlaceholderWrapper = styled.div`
    background: gray;
    border-radius: 5px;
    border: solid 2px black;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    flex-basis: 30%;
    padding: 10px;
    margin: 5px
`

const DeleteIcon = styled.div`
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
`

const ProjectPlaceholder: React.FC<ProjectPlaceholderPropTypes> = ({ project, onDeleteClick, link }) => {
    const [hovered, setHovered] = React.useState(false);
 return (
     <ProjectPlaceholderWrapper data-testid="ProjectPlaceholderWrapper" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
         <h1>{project.name}</h1>
         {hovered && <DeleteIcon onClick={() => onDeleteClick(project)}>X</DeleteIcon>}
         <a href={link}>View</a>
     </ProjectPlaceholderWrapper>
 )
};

export default ProjectPlaceholder;