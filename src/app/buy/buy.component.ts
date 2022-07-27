import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  @Input() appearance: MatButtonToggleAppearance;
  items: Item[] = [];
  text: string = 'トグルボタン未選択';
  value: number;
  flag: boolean;
  isCheck: boolean;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
    this.value = 0;
    this.flag = true;
    this.isCheck = false;
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  tglClick(tglValue: number) {
    if (this.value === tglValue) {
      this.value = 0;
      this.text = 'トグルボタン未選択';
      this.flag = false;
    } else {
      this.value = tglValue;
      this.text = '左から' + this.value + 'つ目を選択中';
    }
  }

  getCheck(): void {
    this.isCheck = this.isCheck ? false : true;
  }
}
