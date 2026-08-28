import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS, ProjectDetail } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  project?: ProjectDetail;
  notFound = false;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.project = PROJECTS.find((p) => p.id === id);
      this.notFound = !this.project;
    });
  }
}
