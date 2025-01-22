import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class StudentListComponent {
  students = [
    { name: 'Student 1', color: '#ccc', showColorPicker: false },
    { name: 'Student 2', color: '#ccc', showColorPicker: false },
    { name: 'Student 3', color: '#ccc', showColorPicker: false },
  ];

  // Visa/dölj färgväljaren för en specifik elev
  toggleColorPicker(student: any) {
    student.showColorPicker = !student.showColorPicker;
  }

  // Sätter färg för en specifik elev
  setColorForStudent(student: any, event: Event) {
    const input = event.target as HTMLInputElement;
    student.color = input.value;
  }

  // Sätter färg för alla elever
  setColorForAll(event: Event) {
    const input = event.target as HTMLInputElement;
    const color = input.value;
    this.students.forEach((student) => (student.color = color));
  }
}
