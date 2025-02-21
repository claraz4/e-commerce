import { Injectable } from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsUtilsService {
  constructor(private permissionsService: NgxPermissionsService) { }

  addPermissions() {
    this.permissionsService.addPermission(['USER']);
  }
}
