import { Animal } from "./Animal";

/**
 * Classe Mamifero representa um mamífero dentro de um zoológico, extendendo a classe Animal e adicionando uma propriedade de raça.
 */
export class Mamifero extends Animal {
    
    /**
     * Representa a raça do mamífero.
     */
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * 
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     * @param _raca A raça do mamífero.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _raca: string) {
        // Chama o construtor da classe Animal com os parâmetros fornecidos.
        super(_nome, _idade, _genero);
        // Define a raça do mamífero.
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }
    
    /**
     * Define a raça do mamífero.
     * 
     * @param _raca A nova raça do mamífero.
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
}
