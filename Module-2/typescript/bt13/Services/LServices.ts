export interface LService<T> {
    showLover();
    searchLoverByName(search:string);
    addLover();
    editLover();
    deleteLover(id: number);
}
    