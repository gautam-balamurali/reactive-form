import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonFormDataModel } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //formData: JsonFormDataModel[];
  formData$: Observable<JsonFormDataModel[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http
    //   .get('/assets/to-render.json')
    //   .subscribe((formData: JsonFormDataModel[]) => {
    //     this.formData = formData;
    //   });
    this.formData$ = this.http.get<JsonFormDataModel[]>(
      '/assets/to-render.json'
    );
  }
}
