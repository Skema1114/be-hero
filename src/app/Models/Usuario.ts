export class Usuario {
  nome = '';
  email = '';
  senha = '';

  get valid(): boolean {
    return this.nome !== '' && this.email !== '' && this.senha !== '';
  }
}