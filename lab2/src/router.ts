import * as fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

class Router {
  private static instance: Router = null;
  private routes: Map<string, unknown>;
  private readonly baseDir = path.join(__dirname, "/routes");

  constructor() {}

  static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  public async createRoutes(dirName, base) {
    //
    const relativePath = path.join(base, dirName);
    const workDir = path.join(this.baseDir, relativePath);

    const dir = await fs.readdir(workDir, { withFileTypes: true });
    for (const dirent of dir) {
      if (dirent.isDirectory()) {
        return this.createRoutes(dirent.name, path.join(base, dirName));
      } else if (
        dirent.isFile() &&
        path.extname(dirName.name) === ".js" &&
        path.basename(dirName, ".js") === "index"
      ) {
        const modulePath = pathToFileURL(path.join(workDir, dirName.name));
        const module = await import(modulePath.toString());
        this.routes.set(relativePath.replaceAll(path.sep, "/"), { ...module });
      }
    }
  }

  // /**
  //  * Execute route method by path
  //  * @param url - url from user
  //  * @param method - base http method "POST" | "GET" | "PUT" | "OPTIONS"
  //  */
  // static routes(url: URL, method) {
  //   const { pathname } = url;

  //   // const osPath = path.format(pathname)/

  //   console.log("base path:", path.basename());

  //   // console.log("URL:", url);
  //   // console.log("METHOD:", method);
  // }
}

export default Router;
