import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {
  lista: { id: number, nombre: string, fechai: string, fechaf: string, ubicacion: string, encargado: string, telefono: string, completado: boolean }[] = [];
  nextId: number = 1;
  nombre: string = '';
  fechainicio: string = '';
  fechafinal: string = '';
  ubicacion: string = '';
  encargado: string = '';
  telefono: string = '';

  constructor(public navCtrl: NavController) { }

  guardar(): void {
    if (this.nombre.trim() && this.fechainicio.trim() && this.fechafinal.trim() && this.ubicacion.trim() && this.encargado.trim() && this.telefono.trim()) {
      this.lista.push({
        id: this.nextId++,
        nombre: this.nombre.trim(),
        fechai: this.fechainicio.trim(),
        fechaf: this.fechafinal.trim(),
        ubicacion: this.ubicacion.trim(),
        encargado: this.encargado.trim(),
        telefono: this.telefono.trim(),
        completado: false
      });
      this.nombre = '';
      this.fechainicio = '';
      this.fechafinal = '';
      this.ubicacion = '';
      this.encargado = '';
      this.telefono = '';

    } else {
      alert('No es valido que algun modulo este sin informacion');
    }
  }

  eliminar(id: number): void {
    this.lista = this.lista.filter(item => item.id !== id);
  }
}