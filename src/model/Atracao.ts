import { Habitat } from "./Habitat";

/**
 * Classe Atracao representa uma atração dentro de um zoológico, composta por um nome e uma lista de habitats.
 */
export class Atracao {

    /**
     * Nome da atração.
     */
    private nome: string;

    /**
     * Lista de habitats associados à atração.
     */
    private lista_de_habitats: Array<Habitat>;
    
    /**
     * Construtor da classe Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _lista_de_habitats A lista de habitats associados à atração.
     */
    constructor(_nome: string,
                _lista_de_habitats: Array<Habitat>) {
        this.nome = _nome;
        this.lista_de_habitats = _lista_de_habitats;
    }

    /**
     * Retorna o nome do Atracao.
     * 
     * @returns o nome do Atracao.
     */
    public getNome(): string {
        return this.nome;
    }
    
    /**
     * Define o nome do Atracao.
     * 
     * @param nome O nome a ser atribuído ao Atracao.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
     /**
     * Retorna a lista de habitats do Atracao.
     * 
     * @returns A lista de habitats do Atracao.
     */
    public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }
    
    /**
     * Define a lista de habitats no Atracao.
     * 
     * @param lista_de_habitats A lista de habitats a ser atribuída ao Atracao.
     */
    public setLista_de_habitats(_lista_de_habitats: Array<Habitat>): void {
        this.lista_de_habitats = _lista_de_habitats;
    }
}