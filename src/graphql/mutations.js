/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
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
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
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
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
