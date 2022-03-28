import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalWindowService {

  public isShowModal$:BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }

}
