class Ave extends Animal {
    private evergadura: string;

    constructor(_evergadura: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.evergadura = _evergadura;
        }

        public getEvergadura(): string {
            return this.evergadura;
        }
        
        public setEvergadura(_evergadura: string): void {
            this.evergadura = _evergadura;
        }
}