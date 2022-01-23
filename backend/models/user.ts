import { RepositoriesInterface } from "../interfaces/repositories.interface.ts";
import { RepositoryInterface } from "../interfaces/repository.interface.ts";
import {UserConstructor, UserInterface, UserInfoInterface} from "../interfaces/user.interface.ts";
import {URLProviderInterface} from "../utils/url_provider/url_provider.interface.ts";
import {Repository} from "./repository.ts";

export const User: UserConstructor = class User implements UserInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    async getInfo(urlProvider: URLProviderInterface): Promise<UserInfoInterface> {
        const url = urlProvider.getUser(this.name)
        const user = await fetch(url)
        return await user.json()
    }

    async getRepositories(urlProvider: URLProviderInterface): Promise<RepositoriesInterface> {
        const url = urlProvider.getRepositories(this.name)
        const repositories = (await (await fetch(url)).json())
            .map((repository: RepositoryInterface) => new Repository(repository))

        console.log(repositories)
        return repositories
    }
}







