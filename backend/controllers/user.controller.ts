import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { User } from "../models/user.ts";
import { RequestBody } from "../utils/request_body.ts";
import { githubApiURLProvider } from "../utils/github_api/github_api_url_provider.ts";

export class UserController {
    static async getUser(req: ServerRequest, match: RegExpExecArray) {
        const body = await RequestBody.decode(req.body)
        const userName = body.userName

        const user = await new User(userName).getInfo(githubApiURLProvider)

        req.respond({
            body: JSON.stringify(user),
            headers: new Headers({
                "content-type": "application/json",
            }),
            status: 200,
        })
    }
    static async getRepositories(req: ServerRequest, match: RegExpExecArray) {
        const body = await RequestBody.decode(req.body)
        const userName = body.userName

        const user = new User(userName)
        const repositories = await user.getRepositories(githubApiURLProvider)

        req.respond({
            body: JSON.stringify(repositories),
            headers: new Headers({
                "content-type": "application/json",
            }),
            status: 200,
        })
    }
}
