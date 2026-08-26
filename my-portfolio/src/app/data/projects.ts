export interface ProjectDetail {
  id: string;
  title: string;
  tag: string;
  period: string;
  role: string;
  stack: string[];
  intro: string;
  duties: string[];
  challenge: string;
  solution: string;
  result: string;
  colors: string[];
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'miraen',
    title: '미래엔 초등교육 쇼핑몰',
    tag: 'Angular',
    period: '2024.03 ~ 2024.08',
    role: '웹 퍼블리셔 (100%)',
    stack: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'Git', 'Figma'],
    intro:
      '초등 교육 관련 상품을 판매하는 쇼핑몰을 Angular 기반으로 구축하고, 공통 UI 컴포넌트를 설계하여 유지보수성과 재사용성을 높였습니다.',
    duties: [
      'Angular 템플릿 작성 및 TypeScript 수정',
      '재사용 가능한 공통 UI 컴포넌트 설계 및 제작',
      'SCSS 변수 및 mixin 기반 스타일 시스템 구축',
      'Angular 라우팅 및 컴포넌트 구조 개선',
      'Git 협업 및 코드 리뷰 참여',
      '반응형 UI 구현 및 웹 접근성을 고려한 마크업',
    ],
    challenge:
      '기존 화면마다 버튼·카드·폼 스타일이 제각각이라 신규 페이지를 만들 때마다 처음부터 마크업을 새로 짜야 했고, 사소한 디자인 변경도 여러 화면을 일일이 찾아 수정해야 했습니다.',
    solution:
      '반복되는 UI를 버튼·카드·폼 단위로 쪼개 공통 컴포넌트로 설계하고, SCSS 변수와 mixin으로 색상·간격 체계를 통일해 컴포넌트 하나만 수정해도 전체 화면에 반영되도록 구조화했습니다.',
    result:
      '신규 페이지 제작 시 기존 컴포넌트를 조합하는 방식으로 작업 방식이 바뀌었고, 이후 합류한 개발자도 컴포넌트 목록만 보고 화면을 붙일 수 있는 구조를 만들었습니다.',
    colors: ['#02a39f', '#fff064', '#838383', '#f5f5f5'],
  },
  {
    id: 'pod',
    title: 'POD 플랫폼 (굿즈베이커리)',
    tag: 'Angular',
    period: '2024.06 ~ 2024.12',
    role: '웹 퍼블리셔 (100%)',
    stack: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'Git', 'Figma'],
    intro:
      'POD(Print on Demand) 기반 굿즈 제작 플랫폼 구축 프로젝트입니다. 기획자가 별도로 없는 환경에서 유저·관리자 페이지의 화면 흐름과 UI 구조를 함께 고민하며 퍼블리싱을 전담했습니다.',
    duties: [
      'Angular 템플릿 작성 및 TypeScript 수정',
      '유저/관리자 화면 흐름 설계 및 정보구조(IA) 정리',
      '재사용 가능한 공통 UI 컴포넌트 설계 및 제작',
      'Angular 라우팅 및 컴포넌트 구조 개선',
      'Git 협업 및 코드 리뷰 참여',
      '반응형 UI 구현 및 운영 유지보수',
    ],
    challenge:
      '기획자가 없어 "유저는 어떤 순서로 상품을 만들고 주문하는가", "관리자는 무엇을 보고 판단해야 하는가"를 화면 설계 단계부터 직접 정의해야 했습니다.',
    solution:
      '유저 플로우(상품 제작 → 장바구니 → 주문)와 관리자 플로우(주문 확인 → 제작 상태 관리)를 각각 정리한 뒤, 두 플로우에서 공통으로 쓰이는 화면 요소를 먼저 컴포넌트로 추출해 설계했습니다.',
    result:
      '퍼블리셔가 화면을 "받아서 만드는" 역할을 넘어 서비스 흐름을 설계하는 단계부터 참여할 수 있다는 걸 확인했고, 이후 유사 프로젝트에서 기획 공백을 오히려 강점으로 활용하게 됐습니다.',
    colors: ['#ff5f23', '#fff064', '#838383', '#f5f5f5'],
  },
  {
    id: 'coway',
    title: '코웨이 굿즈몰',
    tag: 'Renewal',
    period: '2024.01 ~ 2024.05',
    role: '웹 퍼블리셔',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Figma'],
    intro:
      '코웨이 굿즈몰 PC/Mobile 화면을 반응형으로 리뉴얼한 프로젝트입니다. 크로스 브라우징과 웹 표준을 고려한 퍼블리싱을 진행했습니다.',
    duties: [
      'PC/Mobile 반응형 UI 리뉴얼',
      '크로스 브라우징 및 웹 표준을 고려한 퍼블리싱',
      '사용자 편의성을 고려한 화면 구조 개선',
      'QA 대응 및 운영 유지보수',
    ],
    challenge: '기존 PC 전용 화면을 모바일까지 대응하는 반응형 구조로 전환해야 했습니다.',
    solution: '브레이크포인트별 레이아웃을 재설계하고, 주요 브라우저 전반에서 동일하게 동작하도록 검증하며 퍼블리싱했습니다.',
    result: 'PC/Mobile 환경 모두에서 안정적으로 동작하는 반응형 화면을 완성했습니다.',
    colors: ['#838383', '#f5f5f5'],
  },
  {
    id: 'airoommate',
    title: 'AI룸메',
    tag: 'UI/UX',
    period: '2017.06 ~ 2022.12',
    role: 'UI/UX Designer & Publisher',
    stack: ['Figma', 'Adobe XD', 'HTML5', 'CSS3', 'JavaScript'],
    intro: '서비스 UI/UX 디자인부터 퍼블리싱까지 전반적인 화면 구축에 참여한 프로젝트입니다.',
    duties: [
      '서비스 UI/UX 디자인 및 웹 퍼블리싱 전담',
      '화면 설계, 와이어프레임 및 프로토타입 제작',
      '신규 기능 및 운영 화면 UI 구축',
      '개발자와 협업하여 서비스 품질 향상',
    ],
    challenge: '디자인과 퍼블리싱을 한 사람이 전담하며 일관된 UI 품질을 유지해야 했습니다.',
    solution: '디자인 가이드를 직접 만들고, 신규 기능 반영 시에도 가이드 기준으로 일관성을 점검했습니다.',
    result: '디자인부터 구현까지 한 흐름으로 진행되어 커뮤니케이션 비용을 줄일 수 있었습니다.',
    colors: ['#02a39f', '#838383'],
  },
];
