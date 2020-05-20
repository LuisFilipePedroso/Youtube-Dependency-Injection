export default interface BaseRepository<T> {
    find(): T;
    create(data: object): T;
}
