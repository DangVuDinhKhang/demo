import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MusicService } from './music-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  searchTerm?: File;

  result?: string;

  musicService = inject(MusicService);

  onSearch(event: any) {
    this.musicService.search(event.target.files[0]).subscribe(data => {
      this.result = data?.prediction;
    })
  }
}
