import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculatorState } from 'src/states/calculator.state';
import { Observable } from 'rxjs';
import * as CalculatorActions from 'src/actions/calculator.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator_ngsr';
  currentNumber$: Observable<string>
  constructor(private store: Store <{calculator: CalculatorState}>) {
    this.currentNumber$ = this.store.select((state) => state.calculator.currentNumber);
  }
  
  enterNumber(number: string) {
    this.store.dispatch(CalculatorActions.enterNumber({number: number}));
  }
  enterOperator(operator: string) {
    this.store.dispatch(CalculatorActions.enterOperator({operator: operator}));
  }
}
