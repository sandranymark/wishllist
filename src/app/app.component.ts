import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('I want to learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Go to the bathroom'),
  ];

  title = 'My wishllist';

  newWishText = '';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
