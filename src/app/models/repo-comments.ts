export interface RepoComments {
    url: string;
    html_url: string;
    id: number;
    node_id: string;
    user: User;
    position?: number | null;
    line?: number | null;
    path?: string | null;
    commit_id: string;
    created_at: string;
    updated_at: string;
    author_association: string;
    body: string;
  }
  export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
