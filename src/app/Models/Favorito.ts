export class Favorito {
  nome = '';
  emailUsuario = '';
  idFavorito = '';

  get valid(): boolean {
    return this.nome !== '' && this.emailUsuario !== '' && this.nome !== '';
  }
}
