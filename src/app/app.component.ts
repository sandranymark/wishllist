import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, StudentListComponent],
  providers: [],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('I want to learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Go to the bathroom'),
  ];

  title = 'My wishlist';

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
