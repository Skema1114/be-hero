export class Favorito {
  nome = '';
  emailUsuario = '';

  get valid(): boolean {
    return this.nome !== '' && this.emailUsuario !== '';
  }
}
