import { URLProvider } from "../url_provider/url_provider.ts";
import { URLProviderInterface } from "../url_provider/url_provider.interface.ts";

class GithubApiURLProvider extends URLProvider implements URLProviderInterface {
    getUser(userName: string): string {
        return `${this.originURL}users/${userName}`
    }
    getRepositories(userName: string): string {
        return `${this.originURL}users/${userName}/repos`
    }
}

export const githubApiURLProvider = new GithubApiURLProvider("https://api.github.com/")
