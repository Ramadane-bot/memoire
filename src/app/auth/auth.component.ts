import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{
  username?: string;
  password?: string;
  erreur?:string ;
  constructor(private router: Router) { }
  ngOnInit(): void{

  }
  login(): void{
     if(this.username === "git" && this.password === "git"){
       this.router.navigateByUrl("/home").then(() => this.erreur = undefined);
       return
     }
     this.erreur = "Identifiants incorrects"
  }
}
