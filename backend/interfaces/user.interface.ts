import { URLProviderInterface } from "../utils/url_provider/url_provider.interface.ts";

export interface UserConstructor {
    new (name: string): UserInterface;
}

export interface UserInterface {
    getRepositories(urlProvider: URLProviderInterface): void;
    getInfo(urlProvider: URLProviderInterface): void;
}

export interface UserInfoInterface {
    avatar_url: string;
    bio?: any;
    blog: string;
    company?: any;
    created_at: Date;
    email?: any;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    hireable?: any;
    html_url: string;
    id: number;
    location?: any;
    login: string;
    name: string;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username?: any;
    type: string;
    updated_at: Date;
    url: string;
}


