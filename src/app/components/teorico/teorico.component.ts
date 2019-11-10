import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teorico',
  templateUrl: './teorico.component.html',
  styles: []
})
export class TeoricoComponent implements OnInit {

  teorico: any;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.teorico = params['id'];
    });
  }

  ngOnInit() {
  }

}
