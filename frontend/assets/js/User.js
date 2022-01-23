class User {
    constructor(name) {
        this.name = name
        this.info = {}
        this.repositories = []
    }

    async getInfo() {
        this.info = await this.fetch('user')
        return this
    }
    async getRepositories() {
        this.repositories = await this.fetch('user/repositories')
        return this
    }
    async fetch(urlPath) {
        const url = `${location.origin}${location.pathname}${urlPath}`
        const options = {
            method: "post",
            body: JSON.stringify({ userName: this.name })
        }

        const response = await fetch(url, options)
        const result = await response.json()
        if(result.message) {
            return alert(result.message)
        }
        return result
    }
}
