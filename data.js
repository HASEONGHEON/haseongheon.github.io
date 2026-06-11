const DATA = {

  // ── 프로필 ──────────────────────────────────────────────
  profile: {
    photo: "profile.png",          // 사진 파일명. 없애려면 null
    name:  { ko: "하성헌", en: "Ha Seongheon" },
    role:  { ko: "Platform Engineer · AI Infrastructure",
             en: "Platform Engineer · AI Infrastructure" },
    bio:   {
      ko: "LG Electronics VS본부 AX실에서 AI 개발 플랫폼과 LLM 인프라를 설계·운용합니다. EKS 위에서 에이전트 배포 파이프라인, 사내 LLM API 서비스, 클라우드 개발 환경을 구축하고 있습니다.",
      en: "I design and operate AI development platforms and LLM infrastructure at LG Electronics VS AX Lab. Building agent deployment pipelines, internal LLM API services, and cloud development environments on EKS."
    }
  },

  // ── 링크 (순서대로 표시, 없애려면 해당 줄 삭제) ─────────
  links: [
    { label: "GitHub",   url: "https://github.com/HASEONGHEON",                                        icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/%EC%84%B1%ED%97%8C-%ED%95%98-162794317/",   icon: "linkedin" },
    { label: "Email",    url: "mailto:123skfro@gamil.com",                                              icon: "email" }
  ],

  // ── 섹션 순서 (원하는 순서로 배열, 없애려면 해당 줄 삭제) ─
  sections: ["experience", "projects", "skills"],

  // ── 경력 ──────────────────────────────────────────────
  experience: [
    {
      title:  "LG Electronics",
      date:   "2025.02 — Present",
      sub:    { ko: "VS사업본부 AX실 · llmOps Engineer", en: "LGE VS Company. VS AX Department · llmOps Engineer" },
      body:   {
        ko: "AI 개발 플랫폼 설계 및 EKS 기반 인프라 운영. LLM 서비스 게이트웨이 구축, 사내 클라우드 개발 환경 자동화.",
        en: "Designing AI development platforms and operating EKS-based infrastructure. Building LLM service gateways and automating internal cloud development environments."
      },
      tags: []   // 경력에는 태그 없음. 필요하면 ["EKS", "Kubernetes"] 처럼 추가
    }
  ],

  // ── 프로젝트 ────────────────────────────────────────────
  projects: [
    {
      title: "AX-Dev Platform",
      date:  "2026",
      sub:   { ko: "AI Agent / MCP 서버 자동 배포 플랫폼", en: "AI Agent / MCP Server Auto-Deploy Platform" },
      body:  {
        ko: "Coder 기반 클라우드 IDE와 GitLab CI/ArgoCD 파이프라인을 연결해 개발 환경의 코드를 EKS에 자동 배포. Kubernetes DNS 기반 동적 라우팅으로 멀티 에이전트 환경을 구성하고 마켓플레이스에서 서비스를 공유할 수 있도록 설계했습니다.",
        en: "Connected Coder-based cloud IDE with GitLab CI/ArgoCD pipeline to auto-deploy code to EKS. Designed multi-agent environment using Kubernetes DNS-based dynamic routing with a marketplace for service sharing."
      },
      tags: ["Kubernetes", "Coder", "ArgoCD", "GitLab CI", "Docker", "EKS"]
    },
    {
      title: { ko: "LLM API 서비스", en: "LLM API Service" },
      date:  "2026",
      sub:   { ko: "사내 LLM 통합 게이트웨이", en: "Internal LLM Unified Gateway" },
      body:  {
        ko: "LiteLLM 프록시로 Claude, GPT, Qwen 등 여러 모델을 표준 OpenAI 포맷으로 통합 제공. 품의 → Jira 티켓 → 모델 할당 자동화 워크플로우와 토큰 기반 과금 시스템 구축.",
        en: "Unified multiple models (Claude, GPT, Qwen) via LiteLLM proxy in standard OpenAI format. Built automated workflow from approval to Jira ticket to model assignment, with token-based billing."
      },
      tags: ["LiteLLM", "FastAPI", "Kubernetes", "Inf2"]
    },
    {
      title: "AWS LLM Infra",
      date:  "2026",
      sub:   { ko: "Inferentia2 기반 LLM 서빙 인프라", en: "Inferentia2-based LLM Serving Infrastructure" },
      body:  {
        ko: "AWS Inf2 Neuron 칩 기반 LLM 추론 환경 구성. FSx for Lustre 고성능 스토리지와 S3 모델 레지스트리를 연결해 대형 모델 서빙 파이프라인 구축.",
        en: "Built LLM inference environment on AWS Inf2 Neuron chips. Connected FSx for Lustre high-performance storage with S3 model registry for large model serving pipeline."
      },
      tags: ["Inf2", "Neuron SDK", "FSx", "S3", "EKS"]
    },
    {
      title: "OpenClaw",
      date:  "2026",
      sub:   { ko: "오픈소스 자율형 AI 에이전트 플랫폼", en: "Open-source Autonomous AI Agent Platform" },
      body:  {
        ko: '"Your assistant. Your machine. Your rules." 로컬/VPS에서 구동되는 자율형 AI 에이전트. 메신저 기반 제어와 Skills 플러그인 아키텍처로 확장 가능한 구조.',
        en: '"Your assistant. Your machine. Your rules." Autonomous AI agent running on local/VPS. Messenger-based control with extensible Skills plugin architecture.'
      },
      tags: ["Python", "Telegram", "Docker"]
    },
    {
      title: "Agent Ops",
      date:  "2026",
      sub:   { ko: "AI 에이전트 운영 플랫폼", en: "AI Agent Operations Platform" },
      body:  {
        ko: "AI 에이전트 생명주기 관리, 멀티 에이전트 오케스트레이션, 모니터링 및 로그 파이프라인 구축.",
        en: "AI agent lifecycle management, multi-agent orchestration, monitoring and log pipeline construction."
      },
      tags: ["EKS", "Prometheus", "Grafana"]
    }
  ],

  // ── 기술 스택 ────────────────────────────────────────────
  skills: [
    {
      label: "Cloud & Infrastructure",
      tags:  ["AWS EKS", "EC2", "S3", "FSx", "Terraform", "Karpenter"]
    },
    {
      label: "Container & GitOps",
      tags:  ["Kubernetes", "Docker", "Helm", "ArgoCD", "GitLab CI"]
    },
    {
      label: "AI / ML",
      tags:  ["LiteLLM", "Inf2 / Neuron", "Qwen", "Claude API", "Fine-tuning"]
    },
    {
      label: "DevOps & Security",
      tags:  ["OIDC / SSO", "ExternalSecret", "Coder", "Python", "Bash"]
    }
  ]

};
