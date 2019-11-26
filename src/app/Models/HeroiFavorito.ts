export class HeroiFavorito {
  idHeroi = '';
  nome = '';
  img = '';

  get valid(): boolean {
    return this.idHeroi !== '' && this.nome !== '' && this.img !== '';
  }
}
