import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { RootController } from "../controllers/root.controller.ts";
import { Static_fileController } from "../controllers/static_file.controller.ts";
import { UserController } from "../controllers/user.controller.ts";

interface RouteInterface {
    method: string;
    name: string;
    path: string;
    handler: (req: ServerRequest, match: RegExpExecArray) => void;
}

export const routes: RouteInterface[] = [
    {
        name: "root",
        path: "/",
        method: 'GET',
        handler: RootController.returnPage
    },
    {
        name: "static",
        path: "/assets/:pathToFile*",
        method: 'GET',
        handler: Static_fileController.returnFile
    },
    {
        name: "user",
        path: "/user",
        method: 'POST',
        handler: UserController.getUser
    },
    {
        name: "user-repositories",
        path: "/user/repositories",
        method: 'POST',
        handler: UserController.getRepositories
    },
];
