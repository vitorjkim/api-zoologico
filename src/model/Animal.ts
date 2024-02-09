/**
 * Classe Animal representa um animal dentro de um zoológico, composta por um nome, idade e gênero.
 */
export class Animal {

    /**
     * Nome do animal.
     */
    private nome: string;

    /**
     * Idade do animal.
     */
    private idade: number;

    /**
     * Gênero do animal.
     */
    private genero: string;
    
    /**
     * Construtor da classe Animal.
     * 
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Obtém o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }
    
    /**
     * Define o nome do animal.
     * 
     * @param _nome O novo nome do animal.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
    /**
     * Obtém a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }
    
    /**
     * Define a idade do animal.
     * 
     * @param _idade A nova idade do animal.
     */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }
    
    /**
     * Obtém o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }
    
    /**
     * Define o gênero do animal.
     * 
     * @param _genero O novo gênero do animal.
     */
    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
}
