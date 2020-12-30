import {Component, OnInit} from '@angular/core';
import {Documentbox} from './document-resource';

@Component({
  selector: 'app-resource-component',
  templateUrl: './resource-component.component.html',
  styleUrls: ['./resource-component.component.scss']
})
export class ResourceComponentComponent implements OnInit {

  constructor() {
  }

  documentboxs: Documentbox[] = [
    {
      image: 'assets/image/file1.png',
      title: 'Agenda Política de Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
      id: 'modals1',
      doctitlesource: [
        'Situación jurídica de los derechos de las Mujeres Bisexuales, Lesbianas y no heterosexuales',
        'Agenda Política de Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)'
      ],
      linkdocsource: []
    },
    {
      image: 'assets/image/file2.png',
      title: 'todos los titulos que se encuentren',
      id: 'modals2',
      doctitlesource: [
        'Situación jurídica de los derechos de las Mujeres Bisexuales, Lesbianas y no heterosexuales',
        'Agenda Política de Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)'
      ],
      linkdocsource: []
    },
    {
      image: 'assets/image/file3.png',
      title: 'Informes presentados a los mecanismos de derechos humanos',
      id: 'modals3',
      doctitlesource: [
        'Situación jurídica de los derechos de las Mujeres Bisexuales, Lesbianas y no heterosexuales',
        'Agenda Política de Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
        'Análisis del Cuestionario aplicado Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)',
      ],
      linkdocsource: []
    },
    {
      image: 'assets/image/file4.png',
      title: 'Derecho al acceso al aborto en Costa Rica',
      id: 'modals4',
      doctitlesource: [
        'Situación jurídica de los derechos de las Mujeres Bisexuales, Lesbianas y no heterosexuales',
        'Agenda Política de Mujeres Bisexuales, Lesbianas y no heterosexuales (MBLNH)'
      ],
      linkdocsource: []
    }
  ];

  ngOnInit(): void {
  }

}
