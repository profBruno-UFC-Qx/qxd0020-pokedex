export class Pokemon {
    readonly id: number;
    private _nome: string;
    private _apelido: string = "";
    private _nivel: number;
    readonly sexo: "M" | "F";
    private _altura: number;
    private _peso: number;
    private _pvMax: number = 50;
    private _ataque: number;
    private _defesa: number;
    private _ataqueEspecial: number;
    private _defesaEspecial: number;
    private _velocidade: number;
    private _pvAtual: number = 1;
    private _nivelDeAmizade: number = 0;
    readonly taxaDeCaptura = 100;

    constructor(id: number, nome: string, altura: number, peso: number, pvMax: number,
         ataque: number, defesa: number, ataqueEspecial: number, defesaEspecial: number, velocidade:number) {
        this.id = id;
        this._nome = nome;
        this._altura = altura;
        this._peso = peso;
        this._pvMax = pvMax;
        this._ataque = ataque;
        this._defesa = defesa;
        this._ataqueEspecial = ataqueEspecial;
        this._defesaEspecial = defesaEspecial;
        this._velocidade = velocidade;
        this._nivel = 1;
        if (Math.random() > 0.5) {
            this.sexo = "M";
        } else {
            this.sexo = "F";
        }
        
    }

    get nome() { 
        return this._nome;
    }

    get pvMax() {
        return this._pvMax;
    }

    get pvAtual() {
        return this._pvAtual;
    }

    set pvAtual(valor: number) {
        if (valor > this._pvMax) {
            this._pvAtual = this._pvMax;
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

    get ataque() {
        return this._ataque;
    }

    get defesa() {
        return this._defesa;
    }

    get ataqueEspecial() {
        return this._ataqueEspecial;
    }

    get defesaEspecial() {
        return this._defesaEspecial;
    }

    get velocidade() {
        return this._velocidade;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    get nivelDeAmizade() {
        return this._nivelDeAmizade;
    }

    set nivelDeAmizade(valor: number) {
        this._nivelDeAmizade = valor;
    }

}