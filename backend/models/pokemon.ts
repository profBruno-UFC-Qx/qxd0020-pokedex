export class Pokemon {
    readonly id: number;
    private nome: string;
    private apelido: string = "";
    readonly tipos: string[];
    private _nivel: number;
    readonly sexo: "M" | "F";
    private altura: number;
    private peso: number;
    private pvMax: number = 50;
    private ataque: number;
    private defesa: number;
    private ataqueEspecial: number;
    private defesaEspecial: number;
    private velocidade: number;
    private _pvAtual: number = 1;
    private nivelDeAmizade: number = 0;
    readonly taxaDeCaptura = 100;

    constructor(id: number, nome: string, tipos: string[], altura: number, peso: number, pvMax: number,
         ataque: number, defesa: number, ataqueEspecial: number, defesaEspecial: number, velocidade:number) {
        this.id = id;
        this.nome = nome;
        this.tipos = tipos;
        this.altura = altura;
        this.peso = peso;
        this.pvMax = pvMax;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
        this.defesaEspecial = defesaEspecial;
        this.velocidade = velocidade;
        this._nivel = 1;
        if (Math.random() > 0.5) {
            this.sexo = "M";
        } else {
            this.sexo = "F";
        }
        
    }

    get pvAtual() {
        return this._pvAtual;
    }

    set pvAtual(valor: number) {
        if (valor > this.pvMax) {
            this._pvAtual = this.pvMax;
        } else if (valor < 0) {
            this._pvAtual = 0;
        } else {
            this._pvAtual = valor;
        }
    }

    get nivel() {
        return this._nivel;
    }

    set nivel(valor: number | string) {
        let novoNivel = Number(valor);

        if (isFinite(novoNivel)) {
            this._nivel = novoNivel;
        }
    }

    
}