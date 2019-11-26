export class HeroiFavorito {
  idHeroi = '';

  get valid(): boolean {
    return this.idHeroi !== '';
  }
}
