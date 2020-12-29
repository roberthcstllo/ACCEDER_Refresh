import {Component, OnInit} from '@angular/core';
import {Topic} from './acceder_topic';

@Component({
  selector: 'app-cover-component',
  templateUrl: './cover-component.component.html',
  styleUrls: ['./cover-component.component.scss']
})

export class CoverComponentComponent implements OnInit {

  constructor() {
  }

  topics: Topic[] = [
    {
      id: 'topic1',
      name: 'Mujeres lesbianas, bisexuales y no heterosexuales (MLBH)',
      image: 'assets/image/simbol.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic2',
      name: 'poblacion LGBTI',
      image: 'assets/image/simbol2.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic3',
      name: 'Derecho de la mujer',
      image: 'assets/image/simbol3.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic4',
      name: 'Migraciones',
      image: 'assets/image/simbol4.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic5',
      name: 'Derechos de ninos ninas y adolescentes',
      image: 'assets/image/simbol5.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic6',
      name: 'almacenes el rey y pequemo mundo',
      image: 'assets/image/simbol6.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic7',
      name: 'CAPO Y cHAPIS',
      image: 'assets/image/simbol7.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    },
    {
      id: 'topic8',
      name: 'HOMBRES DE LA SEGUNDA GUERRA MUNDIAL',
      image: 'assets/image/simbol8.png',
      modal: '2',
      titledoc: [
        'Difusión de información sobre relaciones impvropias',
        'Difusión de información sobre relaciones impvropias'
      ]
    }
  ];

  ngOnInit(): void {
  }

}


