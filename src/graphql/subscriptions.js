/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      users
      boards {
        items {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      users
      boards {
        items {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      users
      boards {
        items {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($filter: ModelSubscriptionBoardFilterInput) {
    onCreateBoard(filter: $filter) {
      id
      name
      projectID
      project {
        id
        name
        users
        boards {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($filter: ModelSubscriptionBoardFilterInput) {
    onUpdateBoard(filter: $filter) {
      id
      name
      projectID
      project {
        id
        name
        users
        boards {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($filter: ModelSubscriptionBoardFilterInput) {
    onDeleteBoard(filter: $filter) {
      id
      name
      projectID
      project {
        id
        name
        users
        boards {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
      id
      name
      position
      boardID
      board {
        id
        name
        projectID
        project {
          id
          name
          users
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
      id
      name
      position
      boardID
      board {
        id
        name
        projectID
        project {
          id
          name
          users
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
      id
      name
      position
      boardID
      board {
        id
        name
        projectID
        project {
          id
          name
          users
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      sectionID
      section {
        id
        name
        position
        boardID
        board {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        task {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      assignee
      priority
      type
      subtasks {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          taskCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      taskSubtasksId
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      title
      sectionID
      section {
        id
        name
        position
        boardID
        board {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        task {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      assignee
      priority
      type
      subtasks {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          taskCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      taskSubtasksId
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      title
      sectionID
      section {
        id
        name
        position
        boardID
        board {
          id
          name
          projectID
          createdAt
          updatedAt
        }
        task {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      assignee
      priority
      type
      subtasks {
        items {
          id
          title
          sectionID
          description
          assignee
          priority
          type
          createdAt
          updatedAt
          taskSubtasksId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          taskCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      taskSubtasksId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      post {
        id
        title
        sectionID
        section {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        description
        assignee
        priority
        type
        subtasks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        taskSubtasksId
      }
      content
      createdAt
      updatedAt
      taskCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      post {
        id
        title
        sectionID
        section {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        description
        assignee
        priority
        type
        subtasks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        taskSubtasksId
      }
      content
      createdAt
      updatedAt
      taskCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      post {
        id
        title
        sectionID
        section {
          id
          name
          position
          boardID
          createdAt
          updatedAt
        }
        description
        assignee
        priority
        type
        subtasks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        taskSubtasksId
      }
      content
      createdAt
      updatedAt
      taskCommentsId
    }
  }
`;
