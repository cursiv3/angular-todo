import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  listItems = [];

  addItem(item) {
    if (item != "") {
      this.listItems.push({
        id: this.listItems.length + 1,
        entry: item
      });
    }
  }

  completeItem(evt) {
    evt.target.classList.value === 'list-item-active'
      ?
      evt.target.classList.value = 'list-item-complete'
      :
      evt.target.classList.value = 'list-item-active';
  }

  deleteItem(evt, id) {
    this.listItems = this.listItems.filter(obj => obj.id !== id);
  }
}
