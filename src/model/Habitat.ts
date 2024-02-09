import { Animal } from "./Animal";

/**
 * Classe Habitat representa um habitat dentro de um zoológico, composta por um nome e uma lista de animais.
 */
export class Habitat {

    /**
     * Nome do habitat.
     */
    private nome: string;

    /**
     * Lista de animais presentes no habitat.
     */
    private lista_de_animais: Array<Animal>;
    
    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais presentes no habitat.
     */
    constructor(_nome: string,
                _lista_de_animais: Array<Animal>) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns o nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }
    
    /**
     * Define o nome do habitat.
     * 
     * @param nome nome O nome a ser atribuído ao habitat.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
     /**
     * Retorna a lista de animais do habitat.
     * 
     * @returns A lista de animais do habitat.
     */
    public getLista_de_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
    
    /**
     * Define a lista de animais no habitat.
     * 
     * @param lista_de_animais A lista de animais a ser atribuída ao habitat.
     */
    public setLista_de_animais(_lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = _lista_de_animais;
    }
}