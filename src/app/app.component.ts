import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.subscribe(state => {
      console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar() {
    // this.contador ++;
    const action: Action = {
      type: 'INCREMENTAR'
    };
    this.store.dispatch(action);
  }

  decrementar() {
    // this.contador --;
    const action: Action = {
      type: 'DECREMENTAR'
    };
    this.store.dispatch(action);
  }
}
