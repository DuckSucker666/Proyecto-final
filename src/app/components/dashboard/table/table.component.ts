import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuarios';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  listUsers: Usuario[] = [];

  constructor(private _usuarioService: UsuariosService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  dataSource = new MatTableDataSource(this.listUsers);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarUsuarios() {
    this._usuarioService.getUsers().subscribe((data) => {
      this.listUsers = data;
      this.dataSource = new MatTableDataSource(this.listUsers);
      console.log(this.listUsers);
    });
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'acciones'
  ];


}
