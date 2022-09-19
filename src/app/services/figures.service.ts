import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Figure, NewVote } from '../shared/models/figure.model';

@Injectable({
  providedIn: 'root'
})
export class FiguresService {

  private items$: BehaviorSubject<Figure[]> = new BehaviorSubject<Figure[]>([]);
  data$: Observable<Figure[]> = this.items$.asObservable();
  private api: string = `${environment.server_url}/figures/`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  getFigures(){
    this.http.get<Figure[]>(this.api).subscribe(response => {
        this.items$.next(response);
      }
    )
  }

  addVote(figureId: number,vote:NewVote){
    this.http.put<Figure>(this.api+figureId, vote, this.options).subscribe();
  }
}
