export class PagingOption {
    constructor(
        public page: number,
        public pageSize: number,
        public total: number,
        public sortName: string,
        public sortType: string,
    ) { }

    getSortType() {
        return this.sortType === 'A' ? 'ASC' : 'DESC';
    }
}