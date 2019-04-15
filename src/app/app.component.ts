import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  constructor(private store: Store<AppState>) {
    // hago select de contador para asi solo escuchar una propiedad especifica del state
    this.store.select('contador').subscribe(state => {
      console.log(state);
      // this.contador = state.contador; // cuando no haciamos select en el subscribe
      this.contador = state;
    });
  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
