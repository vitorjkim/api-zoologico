import { Animal } from "./Animal";

/**
 * Classe Ave representa uma ave dentro de um zoológico, extendendo a classe Animal e adicionando uma propriedade de envergadura.
 */
export class Ave extends Animal {
    
    /**
     * Representa a envergadura da ave.
     */
    private envergadura: number;

    /**
     * Construtor da classe Ave.
     * 
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string, 
                _envergadura: number) {
        // Chama o construtor da classe Animal com os parâmetros fornecidos.
        super(_nome, _idade, _genero);
        // Define a envergadura da ave.
        this.envergadura = _envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * 
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }
    
    /**
     * Define a envergadura da ave.
     * 
     * @param _envergadura A nova envergadura da ave.
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}
