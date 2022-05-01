import { Component, OnInit } from '@angular/core';
import { NgModule, ViewChild } from "@angular/core";
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList,
  CdkDropListGroup,
  CdkDragMove,
  CdkDragEnter,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { ViewportRuler } from "@angular/cdk/overlay";


@Component({
  selector: 'app-card-arrastrable',
  templateUrl: './card-arrastrable.component.html',
  styleUrls: ['./card-arrastrable.component.css']
})
export class CardArrastrableComponent implements OnInit {

  listaProyectos: any[] = [
    {
      nombre: "Proyecto 1",
      descripcion: "Descripcion del proyecto 1",
      imagen: "https://www.w3schools.com/howto/img_snow.jpg"
    },
    {
      nombre: "Proyecto 2",
      descripcion: "Descripcion del proyecto 2",
      imagen: "https://www.w3schools.com/howto/img_snow.jpg"
    },
    {
      nombre: "Proyecto 3",
      descripcion: "Descripcion del proyecto 3",
      imagen: "https://www.w3schools.com/howto/img_snow.jpg"
    }
  ];


  constructor() {

  }

  ngOnInit(): void {

  }

  onDropped(event: any){
    const cardBody = event.source.element.nativeElement.children[1];
    cardBody.attributes.removeNamedItem('hidden');
  }
}
