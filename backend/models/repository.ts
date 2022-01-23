import { RepositoryInterface, License, Owner } from "../interfaces/repository.interface.ts";

export class Repository implements RepositoryInterface {
    archive_url: string | undefined;
    archived: boolean | undefined;
    assignees_url: string | undefined;
    blobs_url: string | undefined;
    branches_url: string | undefined;
    clone_url: string | undefined;
    collaborators_url: string | undefined;
    comments_url: string | undefined;
    commits_url: string | undefined;
    compare_url: string | undefined;
    contents_url: string | undefined;
    contributors_url: string | undefined;
    created_at: Date | undefined;
    default_branch: string | undefined;
    deployments_url: string | undefined;
    description: string | undefined;
    disabled: boolean | undefined;
    downloads_url: string | undefined;
    events_url: string | undefined;
    fork: boolean | undefined;
    forks: number | undefined;
    forks_count: number | undefined;
    forks_url: string | undefined;
    full_name: string | undefined;
    git_commits_url: string | undefined;
    git_refs_url: string | undefined;
    git_tags_url: string | undefined;
    git_url: string | undefined;
    has_downloads: boolean | undefined;
    has_issues: boolean | undefined;
    has_pages: boolean | undefined;
    has_projects: boolean | undefined;
    has_wiki: boolean | undefined;
    homepage: string | undefined;
    hooks_url: string | undefined;
    html_url: string | undefined;
    id: number | undefined;
    issue_comment_url: string | undefined;
    issue_events_url: string | undefined;
    issues_url: string | undefined;
    keys_url: string | undefined;
    labels_url: string | undefined;
    language: string | undefined;
    languages_url: string | undefined;
    license: License | undefined;
    merges_url: string | undefined;
    milestones_url: string | undefined;
    mirror_url: any | undefined;
    name: string | undefined;
    node_id: string | undefined;
    notifications_url: string | undefined;
    open_issues: number | undefined;
    open_issues_count: number | undefined;
    owner: Owner | undefined;
    private: boolean | undefined;
    pulls_url: string | undefined;
    pushed_at: Date | undefined;
    releases_url: string | undefined;
    size: number | undefined;
    ssh_url: string | undefined;
    stargazers_count: number | undefined;
    stargazers_url: string | undefined;
    statuses_url: string | undefined;
    subscribers_url: string | undefined;
    subscription_url: string | undefined;
    svn_url: string | undefined;
    tags_url: string | undefined;
    teams_url: string | undefined;
    trees_url: string | undefined;
    updated_at: Date | undefined;
    url: string | undefined;
    watchers: number | undefined;
    watchers_count: number | undefined;

    constructor(repo: RepositoryInterface) {
        Object.assign(this, repo)
    }

    getID() {
        return this.id
    }

}

// class Formatter {
//     __constuctor(repositories) {
//         this.response = [];
//
//         foreach (repositories as repo) {
//             this.response.push({id: repo.getID(), name: repo.getName()});
//         }
//     }
// }
//
//
// class controller {
//     // retrieve repositories
//     return new RepositoriesResponse(new Formatter(repositories))
// }
