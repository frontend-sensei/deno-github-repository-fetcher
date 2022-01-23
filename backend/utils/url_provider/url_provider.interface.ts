export interface URLProviderInterface {
    getUser(userName: string): string
    getRepositories(userName: string): string
}
