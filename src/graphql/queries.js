/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        users
        boards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
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
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
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
        content
        createdAt
        updatedAt
        taskCommentsId
      }
      nextToken
    }
  }
`;
