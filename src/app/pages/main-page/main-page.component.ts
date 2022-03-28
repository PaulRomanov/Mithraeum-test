import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from 'src/app/services/modal-window.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public modalWindowService: ModalWindowService) { }

  ngOnInit() {
  }
  public login(): void {
    this.modalWindowService.openModal();
  }
  public logout(): void {
    this.modalWindowService.closeModal();
  }
}
