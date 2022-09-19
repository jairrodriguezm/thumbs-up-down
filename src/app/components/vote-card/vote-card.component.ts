import { Component, Input, OnInit } from '@angular/core';
import { FiguresService } from 'src/app/services/figures.service';
import { CardGradient, CardViews } from 'src/app/shared/enums/card-views.enum';
import { Trends, VoteText, VoteTypes } from 'src/app/shared/enums/trends.enum';
import { Figure, NewVote, Votes } from 'src/app/shared/models/figure.model';
import { FigureDefault } from 'src/app/shared/utils/mock/figure.mock';

@Component({
  selector: 'vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss']
})
export class VoteCardComponent implements OnInit {

  @Input() mode: string = CardViews.List;
  @Input() data: Figure = FigureDefault;

  selectedVote: number = VoteTypes.undefined;
  voted: boolean = false;
  voteText: string = VoteText.now;

  get cardImage():string {
    return `${this.mode === CardViews.List ? CardGradient.List : CardGradient.Grid}${this.data.picture})`;
  }
  
  get positivePercentage():number {
    return (this.data.votes.positive * 100)/(this.data.votes.positive + this.data.votes.negative);
  }

  get negativePercentage():number {
    return (this.data.votes.negative * 100)/(this.data.votes.positive + this.data.votes.negative);
  }

  get trend():string {
    return this.data.votes.positive >= this.data.votes.negative ? Trends.positive : Trends.negative;
  }

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
  }

  positiveVote(){
    this.selectedVote = VoteTypes.positive;
  }

  negativeVote(){
    this.selectedVote = VoteTypes.negative;
  }

  vote(){
    if (!this.voted) {
      if (this.selectedVote < VoteTypes.undefined) {
        let votes:Votes = {...this.data.votes};
        if (this.selectedVote === VoteTypes.positive) {
          votes.positive = this.data.votes.positive + 1;
          this.data.votes.positive = votes.positive;
        } else{
          votes.negative = this.data.votes.negative + 1;
          this.data.votes.negative = votes.negative;
        }
        let newVote: NewVote = { ...this.data, votes: votes };
        this.figuresService.addVote(this.data.id, newVote);
        this.voted = true;
        this.voteText = VoteText.again;
      }
    }else{
      this.reset();
    }
  }

  reset(){
    this.voted = false;
    this.selectedVote = VoteTypes.undefined;
    this.voteText = VoteText.now;
  }

}
