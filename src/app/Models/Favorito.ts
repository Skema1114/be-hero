export class Favorito {
  nome = '';
  idFavorito = '';
  emailUsuario = '';

  get valid(): boolean {
    return this.nome !== '' && this.idFavorito !== '' && this.emailUsuario !== '';
  }
}