import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { add, subtract } from '@rulecms/client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'use_rulecms_example_angular_project';
  addResult = 0;
  subtractResult = 0;
  ngOnInit() {
    this.addResult = add(1, 2);
    this.subtractResult = subtract(1, 2);
  }
}
