import { Atracao } from "./Atracao";

/**
 * Classe Zoologico representa um zoológico com um nome e uma lista de atrações.
 */
export class Zoologico {
    
    /**
     * Nome do zoológico.
     */
    private nome: string;

    /**
     * Lista de atrações do zoológico.
     */
    private lista_de_atrações: Array<Atracao>;
    
    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _lista_de_atrações A lista de atrações do zoológico.
     */
    constructor(_nome: string,
                _lista_de_atrações: Array<Atracao>) {
        this.nome = _nome;
        this.lista_de_atrações = _lista_de_atrações;
    }

    /**
     * Retorna o nome do zoologico.
     * 
     * @returns O nome do zoologico.
     */
    public getNome(): string {
        return this.nome;
    }
    
    /**
     * Define o nome do zoologico.
     * 
     * @param nome O novo nome do zoologico.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
     /**
     * Retorna a lista de atrações do zoologico.
     * 
     * @returns A lista de atrações do zoologico.
     */
    public getLista_de_atrações(): Array<Atracao> {
        return this.lista_de_atrações;
    }
    
    /**
     * Define a lista de atrações no zoologico.
     * 
     * @param lista_de_atrações A lista de atrações a ser atribuída ao zoologico.
     */
    public setLista_de_atrações(_lista_de_atrações: Array<Atracao>): void {
        this.lista_de_atrações = _lista_de_atrações;
    }
}

