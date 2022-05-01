import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  openContacto = () => {
    const contactoModal = document.getElementById('contacto-modal');
    contactoModal?.attributes.removeNamedItem('hidden');
  }
  closeContacto() {
    const contactoModal = document.getElementById('contacto-modal');
    contactoModal?.attributes.setNamedItem(document.createAttribute('hidden'));
  }

  constructor() {

   }

  ngOnInit(): void {
    const icono = document.querySelector('#contacto-icon');
    icono?.addEventListener('click', this.openContacto);
  }

}
