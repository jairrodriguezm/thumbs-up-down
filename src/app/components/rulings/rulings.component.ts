import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FiguresService } from 'src/app/services/figures.service';
import { DropdownItem } from 'src/app/shared/models/dropdown.model';
import { Figure } from 'src/app/shared/models/figure.model';

@Component({
  selector: 'rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.scss']
})
export class RulingsComponent implements OnInit {

  screenWidth = window.innerWidth;
  
  @Input() title: string = "";

  views: DropdownItem[] = [{name:'List'},{name:'Grid'}];
  selectedView: DropdownItem = {name:'List'};

  figures$!: Observable<Figure[]>;

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
    this.figuresService.getFigures();
    this.figures$ = this.figuresService.data$;
    this.setGrid();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.setGrid();
  }

  setGrid(){
    if (this.screenWidth <= 768) { this.selectedView = {name:'Grid'}};
  }

}
