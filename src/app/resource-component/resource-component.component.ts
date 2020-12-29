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
      modallink: '4'
    },
    {
      image: 'assets/image/file2.png',
      title: 'todos los titulos que se encuentren',
      modallink: '4'
    },
    {
      image: 'assets/image/file3.png',
      title: 'Informes presentados a los mecanismos de derechos humanos',
      modallink: '4'
    },
    {
      image: 'assets/image/file4.png',
      title: 'Derecho al acceso al aborto en Costa Rica',
      modallink: '4'
    }
  ];

  ngOnInit(): void {
  }

}
