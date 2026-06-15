const DATA = {

  // ── 프로필 ──────────────────────────────────────────────
  profile: {
    photo: "assets/profile.png",          // 사진 파일명. 없애려면 null
    name:  { ko: "하성헌", en: "Ha Seongheon" },
    role:  {
      ko: "Platform Engineer · AI Infrastructure",
      en: "Platform Engineer · AI Infrastructure"
    },
    bio: {
      ko: "LG 전자 VS사업본부 AX실에서 AI 개발 플랫폼과 LLM 인프라를 설계·운영하고 있습니다. EKS 기반 클라우드 클러스터 위에서 에이전트/MCP 자동 배포 플랫폼, 사내 LLM API 게이트웨이, 클라우드 개발 환경 및 운영 자동화 체계를 구축하고 있습니다.",
      en: "I design and operate AI development platforms and LLM infrastructure at LG Electronics VS AX Department. On EKS-based cloud clusters, I build agent/MCP auto-deployment platforms, internal LLM API gateways, cloud development environments, and operational automation systems."
    }
  },

  // ── 링크 (순서대로 표시, 없애려면 해당 줄 삭제) ─────────
  links: [
    { label: "GitHub",   url: "https://github.com/HASEONGHEON",                                      icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/%EC%84%B1%ED%97%8C-%ED%95%98-162794317/", icon: "linkedin" },
    { label: "Email",    url: "mailto:[123skfro@gmail.com](mailto:123skfro@gmail.com)",               icon: "email" },
    { label: { ko: "석사과정 연구 경력", en: "M.S. Research Portfolio" }, url: "research/", icon: "research" }
  ],

  // ── 섹션 순서 (원하는 순서로 배열, 없애려면 해당 줄 삭제) ─
  sections: ["experience", "projects", "skills"],

  // ── 경력 ──────────────────────────────────────────────
  experience: [
    {
      title: "LG Electronics",
      date:  "2025.02 — Present",
      sub: {
        ko: "VS사업본부 AX실 · LLMOps Engineer",
        en: "VS Company, AX Department · LLMOps Engineer"
      },
      body: {
        ko: "AI 개발 플랫폼과 EKS 기반 클라우드 인프라를 설계·운영하고 있습니다. 사내 LLM API 게이트웨이, 에이전트/MCP 자동 배포 플랫폼, 클라우드 개발 환경 자동화 체계를 구축했으며, VS사업본부 AI Agent 구축 실무자 과정의 사내 강사로도 활동하고 있습니다.",
        en: "Designing and operating AI development platforms and EKS-based cloud infrastructure. Built an internal LLM API gateway, an agent/MCP auto-deployment platform, and automation systems for cloud development environments. Also serving as an internal instructor for the VS Company's AI Agent hands-on training program."
      },
      tags: []
    }
  ],

  // ── 프로젝트 ────────────────────────────────────────────
  projects: [
    {
      title: { ko: "Cloud Engineering", en: "Cloud Engineering" },
      date:  "2025.06 - Present",
      sub: {
        ko: "VS사업본부 AX실 · 클라우드 인프라 운영 및 플랫폼 엔지니어링",
        en: "VS Company, AX Department · Cloud Infrastructure Operations and Platform Engineering"
      },
      body: {
        ko: "EKS 기반 클라우드 클러스터의 운영 안정성과 확장성을 확보하기 위한 인프라 운영 업무를 담당하고 있습니다. Kubernetes 워크로드 운영, 모니터링 및 로그 파이프라인 구성, 클러스터 리소스 관리, 배포 환경 표준화 등을 통해 AI 개발 플랫폼과 LLM 서비스가 안정적으로 실행될 수 있는 기반을 구축하고 있습니다.",
        en: "Responsible for operating EKS-based cloud clusters with a focus on reliability and scalability. Managing Kubernetes workloads, monitoring and logging pipelines, cluster resources, and standardized deployment environments to provide a stable foundation for AI development platforms and LLM services."
      },
      tags: ["EKS", "Kubernetes", "Prometheus", "Grafana", "Helm"]
    },
    {
      title: { ko: "AX-Dev Platform", en: "AX-Dev Platform" },
      date:  "2025.12 - Present",
      sub: {
        ko: "클라우드 IDE 개발 환경 및 AI Agent / MCP 서버 자동 배포 플랫폼",
        en: "Cloud IDE Development Environment and AI Agent / MCP Server Auto-Deployment Platform"
      },
      body: {
        ko: "클라우드 클러스터 기반 개발·배포 플랫폼에서 사용자가 에이전트와 MCP의 비즈니스 로직 개발에만 집중할 수 있도록, 개발 환경을 Docker 이미지 스냅샷으로 생성하고 이를 EKS에 자동 배포하는 파이프라인을 구축했습니다. Kubernetes DNS 기반 동적 라우팅을 적용하여 배포된 에이전트와 MCP 서비스를 사용자별·환경별로 연결했으며, 다수 사용자가 클러스터 내에서 개발·배포·실행 환경을 공유할 수 있는 멀티 에이전트 운영 구조를 구현했습니다.",
        en: "Built a cloud cluster-based development and deployment platform that allows users to focus only on implementing business logic for agents and MCP servers. The platform captures development environments as Docker image snapshots and automatically deploys them to EKS. Implemented Kubernetes DNS-based dynamic routing to connect deployed agents and MCP services by user and environment, enabling a multi-agent operating model where multiple users can share development, deployment, and runtime environments within the cluster."
      },
      tags: ["Kubernetes", "Coder", "ArgoCD", "GitLab CI", "Docker", "EKS"]
    },
    {
      title: { ko: "LLM API 서비스", en: "LLM API Service" },
      date:  "2026.01 - Present",
      sub: {
        ko: "사내 LLM 통합 게이트웨이",
        en: "Internal LLM Unified Gateway"
      },
      body: {
        ko: "LiteLLM 프록시를 기반으로 Claude, GPT, Qwen 및 자체 추론 모델 등 다양한 LLM 엔드포인트를 표준 OpenAI API 포맷으로 통합 제공하는 사내 LLM 게이트웨이를 구축했습니다. 품의, Jira 티켓, 모델 권한 할당으로 이어지는 사용 신청 및 승인 워크플로우를 자동화했으며, 토큰 사용량 기반 과금 및 사용량 추적 체계를 함께 구현했습니다.",
        en: "Built an internal LLM gateway using LiteLLM proxy to provide multiple LLM endpoints, including Claude, GPT, Qwen, and internal inference models, through a standard OpenAI-compatible API format. Automated the request and approval workflow from internal approval to Jira ticket creation and model permission assignment, and implemented token-based billing and usage tracking."
      },
      tags: ["LiteLLM", "FastAPI", "Kubernetes", "OpenAI API", "Inf2"]
    },
    {
      title: { ko: "CLI Agent", en: "CLI Agent" },
      date:  "2026.05 - Present",
      sub: {
        ko: "opencode 기반 사내 CLI 에이전트",
        en: "Internal CLI Agent Based on opencode"
      },
      body: {
        ko: "opencode 기반 사내 CLI 에이전트를 구축하여 로컬 및 클러스터 개발 환경에서 자율적으로 실행할 수 있도록 구성했습니다. 사내 LLM API와 손쉽게 연동할 수 있으며, CLI 기반 개발·운영 작업을 자동화하고 메신저를 통한 원격 제어를 지원합니다. 또한 확장 가능한 Skills 플러그인 아키텍처를 적용하여 다양한 내부 업무 시나리오에 맞게 기능을 확장할 수 있도록 설계했습니다.",
        en: "Built an internal CLI agent based on opencode that can run autonomously on local machines and VPS environments. It integrates easily with the internal LLM API, automates CLI-based development and operations tasks, and supports remote control through messenger-based interfaces. The agent also adopts an extensible Skills plugin architecture, allowing it to be expanded for various internal workflow scenarios."
      },
      tags: ["Python", "Telegram", "Docker", "LLM API", "Skills"]
    }
  ],

  // ── 기술 스택 ────────────────────────────────────────────
  skills: [
    {
      label: "Cloud & Infrastructure",
      tags: ["AWS EKS", "EC2", "S3", "FSx", "Terraform", "Karpenter"]
    },
    {
      label: "Container & GitOps",
      tags: ["Kubernetes", "Docker", "Helm", "ArgoCD", "GitLab CI"]
    },
    {
      label: "AI / ML Infrastructure",
      tags: ["LiteLLM", "Inf2 / Neuron", "Qwen", "Claude API", "OpenAI API", "Fine-tuning"]
    },
    {
      label: "DevOps & Automation",
      tags: ["OIDC / SSO", "ExternalSecret", "Coder", "Python", "Bash"]
    }
  ]

};
