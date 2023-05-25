import { IService } from "./ISevice";
import { Blog } from "../entity/blog";

export class BlogService implements IService<Blog> {
    add(post: Blog) {
        throw new Error("Method not implemented.");
    }
    update(id: string, post: Blog) {
        throw new Error("Method not implemented.");
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    show() {
        throw new Error("Method not implemented.");
    } 
}