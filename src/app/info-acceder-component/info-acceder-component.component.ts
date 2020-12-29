import {Component, OnInit} from '@angular/core';
import {Position, Team} from './position_people';

@Component({
  selector: 'app-info-acceder-component',
  templateUrl: './info-acceder-component.component.html',
  styleUrls: ['./info-acceder-component.component.scss']
})
export class InfoAccederComponentComponent implements OnInit {

  constructor() {

  }

  positions: Position[] = [
    {
      photo: 'assets/image/laura.png',
      name: 'Larissa Arrollo Navarrete',
      position: 'Presidenta',
      mail: 'larissa@acceder.cr',
      id: 'people1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      photo: 'assets/image/laura.png',
      name: 'Laura Valenciano Arrieta',
      position: 'Directora General',
      mail: 'larissa@acceder.cr',
      id: 'people2',
      text: ''
    },
    {
      photo: 'assets/image/laura.png',
      name: 'Larissa Arrollo Navarrete',
      position: 'Presidenta',
      mail: 'larissa@acceder.cr',
      id: '3',
      text: ''
    },
    {
      photo: 'assets/image/laura.png',
      name: 'Larissa Arrollo Navarrete',
      position: 'Presidenta',
      mail: 'larissa@acceder.cr',
      id: 'people4',
      text: ''
    },
    {
      photo: 'assets/image/laura.png',
      name: 'Larissa Arrollo Navarrete',
      position: 'Presidenta',
      mail: 'larissa@acceder.cr',
      id: 'people5',
      text: ''
    },
    {
      photo: 'assets/image/laura.png',
      name: 'Larissa Arrollo Navarrete',
      position: 'Presidenta',
      mail: 'larissa@acceder.cr',
      id: 'people6',
      text: ''
    }
  ];

  teams: Team[] = [
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    },
    {
      photo: 'assets/image/paula.png',
      name: 'Paula Artavia Paris',
      position: 'Equipo comunicación',
      mail: 'paula@acceder.cr',
    }
  ];

  ngOnInit(): void {
  }

}
