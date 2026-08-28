import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects = PROJECTS;

  skills = [
    { label: 'HTML5', desc: 'Semantic Markup' },
    { label: 'CSS / SCSS', desc: 'Responsive UI' },
    { label: 'Angular', desc: 'Template / Component' },
    { label: 'TypeScript', desc: 'UI 협업 / 수정' },
    { label: 'Git', desc: 'Collaboration' },
    { label: 'Figma', desc: 'UI / UX Design' },
  ];

  process = [
    { step: '01', title: '문제 파악', desc: '화면을 만들기 전에 무엇이 필요한지 먼저 봅니다.' },
    { step: '02', title: '구조 설계', desc: '공통 요소와 사용자 흐름을 정리하고 구조를 잡습니다.' },
    { step: '03', title: 'UI 구현', desc: '디자인 의도를 살리면서 실제 화면으로 구현합니다.' },
    { step: '04', title: '협업 & 개선', desc: '개발자와 의견을 나누고 필요한 부분을 계속 개선합니다.' },
  ];
}
