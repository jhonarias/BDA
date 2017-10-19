import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme-service.service";
import { Theme } from "../theme";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  theme:Theme;

  status = [
    {value: '1', viewValue: 'Activo'},
    {value: '0', viewValue: 'Inactivo'},  
  ];
  
  constructor(private themeService:ThemeService) { }

  ngOnInit() {
    this.theme = new Theme();
  }

  onSaveClick() {

    this.themeService.saveTheme(this.theme).then((theme) => {
      console.log('respuesta', theme);
      if(theme['status'] == 201 ) {
        let respuesta = JSON.parse(theme['_body']); 
        this.themeService.themeList.push(respuesta);
        this.theme = new Theme();
        alert('Se agrego correctmente el tema!');
      } else {
        alert(theme['_body']);
      }     
    }).catch((err) => {
      console.log(err);
    })
  }

}
