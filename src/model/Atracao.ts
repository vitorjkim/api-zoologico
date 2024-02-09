import { Habitat } from "./Habitat";

export class Atracao{

    private nome: string;
    private lista_de_habitats: Array<Habitat>;
    
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