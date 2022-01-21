import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  UserLogin: UsuarioLogin = new UsuarioLogin
  constructor( 
  private auth: AuthService,
  private router: Router
  ){ }

  ngOnInit() {
    window.scroll(0,0)
}    
entrar(){
    this.auth.entrar(this.UserLogin).subscribe((resp:UsuarioLogin)=>{
    this.UserLogin = resp

    environment.token=this.UserLogin.token
    environment.nome=this.UserLogin.nome
    environment.foto=this.UserLogin.foto
    environment.id=this.UserLogin.id

    console.log(environment.token)

    console.log(environment.nome)

    console.log(environment.foto)

    console.log(environment.id)

    this.UserLogin.foto

    this.router.navigate(['/inicio'])
    }, erro=>{
      if(erro.status == 401){
        alert('Usuario ou senha estão incorretos!')
    }
  })
  }

}
