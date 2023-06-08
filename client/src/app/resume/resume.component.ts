import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addExternalStylesheet('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css');
  }

  addExternalStylesheet(url: string): void {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', url);
    this.renderer.appendChild(document.head, link);
  }
}