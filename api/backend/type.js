const outputTypeDefs = `
  type User {
    _id:            ID!
    username:       String!
    displayname:    String!
    avatarUrl:      String!
    smallAvatarUrl: String!
    lastSeen:       String!
    lastSeenReason: String!
    createdAt:      String!
    lastUpdate:     String!
    bio:            String!
    donationUrl:    String!
  }

  type Session {
    _id:       ID!
    user:      User!
    token:     String!
    expiresAt: String!
    createdAt: String!
    ip:        String!
    ua:        String!
  }

  type ThemeVairableOption {
    name:  String!
    label: String!
    value: String!
  }

  type ThemeVariable {
    type:    String!
    label:   String!
    name:    String!
    value:   String
    default: String!
    options: [ThemeVairableOption!]
  }

  type Rating {
    _id:   ID!
    user:  User!
    theme: Theme!
    value: Int!
  }

  type Theme {
    _id:         ID!
    user:        User!
    title:       String!
    description: String!
    content:     String!
    createdAt:   String!
    lastUpdate:  String!
    version:     String!
    screenshots: [String]
    license:     String!
    variables:   [ThemeVariable]
  }

  type SearchResults {
    users:  [User]
    themes: [Theme]
  }

  type Version {
    revisionLong:   String!
    revisionShort:  String!
    revisionTag:    String!
    revisionBranch: String!
  }

  type License {
    package:    String
    repository: String
    license:    String
    source:     String
    sourceText: String
  }
`

const inputTypeDefs = `
  input ThemeQuery {
    id:   ID
    user: String
  }

  input ThemeVariableOptionInput {
    name:  String!
    label: String!
    value: String!
  }

  input ThemeVariableInput {
    type:    String!
    label:   String!
    name:    String!
    value:   String
    default: String!
    options: [ThemeVariableOptionInput!]
  }
`

const queries = `
  type Query {
    viewer: User
    verifyToken: Session!
    version: Version!
    licenses: [License]!
    sessions: [Session]!

    theme(
      id: ID!
    ): Theme!

    user(
      id: ID!
    ): User!

    userThemes(
      id: ID!
    ): [Theme]!

    search(
      terms: String!
      limit: Int
      skip:  Int
    ): SearchResults!

    latestThemes(
      limit: Int
    ): [Theme]!

    popularThemes(
      limit: Int
    ): [Theme]!

    ratings(
      id: ID!
    ): [Rating]!
  }
`

const mutations = `
  type Mutation {
    viewer: User
    logout: Boolean!
    resendVerification: Boolean!

    verifyEmail(
      token: String!
    ): Boolean!

    register(
      displayname: String!
      email:       String!
      password:    String!
    ): User!

    login(
      email:    String!
      password: String!
    ): Session!

    deleteTheme(
      id: ID!
    ): Boolean!

    theme(
      id:          ID
      title:       String!
      description: String!
      content:     String!
      version:     String!
      screenshots: [String]
      variables:   [ThemeVariableInput]!
      license:     String!
    ): Theme!

    account(
      password:    String
      displayname: String
      email:       String
      bio:         String
      donationUrl: String
    ): User!

    rate(
      id:    ID!
      value: Int!
    ): Rating!
  }
`

export default [
  outputTypeDefs,
  inputTypeDefs,
  queries,
  mutations,
].join('\n')
