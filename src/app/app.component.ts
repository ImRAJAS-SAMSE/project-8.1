import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Parent_comp_render';
  /*
  public Parent_redering: string = 'your name';
  public Text: number = 0;
  public Btn() {
    this.Text = this.Parent_redering.trim().length - 1;
    return this.Text;
  }
  */
  public Text: number = 0;

  calculateLength(inputValue: string) {
    this.Text = inputValue.trim().length;
  }
}
