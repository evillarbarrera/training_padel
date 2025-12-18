import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agendaFiltro',
  standalone: true
})
export class AgendaFiltroPipe implements PipeTransform {

  transform(lista: any[], busqueda: string, dia: string) {
    if (!lista) return [];

    let filtrado = lista;

    if (dia && dia !== 'Todos') {
      filtrado = filtrado.filter(e => e.dia === dia);
    }

    if (busqueda && busqueda.trim() !== "") {
      const term = busqueda.toLowerCase();
      filtrado = filtrado.filter(e =>
        e.alumno.toLowerCase().includes(term) ||
        e.tipo.toLowerCase().includes(term)
      );
    }

    return filtrado;
  }
}
