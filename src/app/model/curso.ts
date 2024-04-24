export class Curso {
    constructor(
        public id?: number,
        public titulo?: string,
        public descripcion?: string,
        public precio?: number,
        public duracion?: number,
        public nivel?: string,
        public vacantes?: number
      ) {}
}
