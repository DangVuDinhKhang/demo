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

  imageUrl?: string | null = null;

  musicService = inject(MusicService);

  onSearch(event: any) {
    this.musicService.search(event.target.files[0]).subscribe(data => {
      this.result = data?.prediction;
    })
  }

  onImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      const file = files[0];

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };

      reader.readAsDataURL(file);
    }
    else {
      console.log("Error when read image");
    }
  }
}
