import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss',
})
export class DesignSystemComponent {
  colors = [
    { name: 'Accent / Teal', hex: '#02A39F', usage: '메인 CTA, 강조 텍스트, 링크' },
    { name: 'Accent / Orange', hex: '#FF5F23', usage: '보조 강조, 포인트 배지' },
    { name: 'Highlight / Yellow', hex: '#FFF064', usage: '하이라이트, 이벤트성 요소' },
    { name: 'Text / Primary', hex: '#1A1A1A', usage: '본문 텍스트' },
    { name: 'Text / Muted', hex: '#838383', usage: '보조 설명, 메타 정보' },
    { name: 'Surface', hex: '#F5F5F5', usage: '카드·섹션 배경' },
  ];

  typeScale = [
    { label: 'Display', size: '44px', weight: '800', sample: '기획서의 빈칸을 UI로' },
    { label: 'Heading', size: '28px', weight: '800', sample: '주요 프로젝트를 소개합니다' },
    { label: 'Subheading', size: '19px', weight: '700', sample: '어려웠던 점' },
    { label: 'Body', size: '16px', weight: '400', sample: '화면을 만드는 것에서 끝나지 않고' },
    { label: 'Caption', size: '13px', weight: '600', sample: 'Angular · TypeScript · SCSS' },
  ];

  spacing = [
    { token: 'radius-md', value: '12px', usage: '카드, 버튼' },
    { token: 'radius-lg', value: '20px', usage: '섹션, 큰 컨테이너' },
    { token: 'section-padding', value: '96px', usage: '섹션 간 여백(PC)' },
    { token: 'container-max', value: '1080px', usage: '콘텐츠 최대 너비' },
  ];
}
