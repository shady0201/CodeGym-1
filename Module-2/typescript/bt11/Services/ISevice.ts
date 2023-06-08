export interface IService<T> {
    add(post:T);
    update(id: string, post: T);
    delete(id: string);
    show();
}