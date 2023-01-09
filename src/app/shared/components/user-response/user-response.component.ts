import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResponseQueezyService } from '@modules/play/services/response-queezy.service';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.scss']
})
export class UserResponseComponent implements OnInit{
  id: string;
  loading: boolean = false;
  respuestaCuestionario: any;
  rutaAnterior = '';

  constructor(
    private _userResponseService: ResponseQueezyService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.rutaAnterior = this.aRoute.snapshot.url[0].path
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.obtenerRespuestaUsuario();
  }

  obtenerRespuestaUsuario() {
    this.loading = true;
    this._userResponseService.getRespuestaUsuario(this.id).subscribe(doc => {
      console.log(doc);
      if(!doc.exists) {
        this.router.navigate(['/']);
        return;
      }
      this.respuestaCuestionario = doc.data();
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    })
  }

  volver() {
    if(this.rutaAnterior === 'userResponseAdmin') {
      this.router.navigate(['/stats', this.respuestaCuestionario.idCuestionario])
    } else {
      this.router.navigate(['/']);
    }
  }

}
