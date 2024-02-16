import { Animal } from "./Animal";

/**
 * Classe Reptil representa um réptil dentro de um zoológico, extendendo a classe Animal e adicionando uma propriedade de tipo de escamas.
 */
export class Reptil extends Animal {
    
    /**
     * Representa o tipo de escamas do réptil.
     */
    private tipo_de_escamas: string;

    /**
     * Construtor da classe Reptil.
     * 
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _tipo_de_escamas: string) {
        // Chama o construtor da classe Animal com os parâmetros fornecidos.
        super(_nome, _idade, _genero);
        // Define o tipo de escamas do réptil.
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Obtém o tipo de escamas do réptil.
     * 
     * @returns O tipo de escamas do réptil.
     */
    public getTipo_de_escamas(): string {
        return this.tipo_de_escamas;
    }
    
    /**
     * Define o tipo de escamas do réptil.
     * 
     * @param _tipo_de_escamas O novo tipo de escamas do réptil.
     */
    public setTipo_de_escamas(_tipo_de_escamas: string): void {
        this.tipo_de_escamas = _tipo_de_escamas;
    }
}
