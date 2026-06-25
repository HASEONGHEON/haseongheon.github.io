const DATA = {

  // ── 프로필 ──────────────────────────────────────────────
  profile: {
    photo: "assets/profile.png",          // 사진 파일명. 없애려면 null
    name:  { ko: "하성헌", en: "Ha SeongHeon" },
    role:  {
      ko: "Platform Engineer · AI Infrastructure",
      en: "Platform Engineer · AI Infrastructure"
    },
    bio: {
      ko: "AI는 모델 자체보다, 사람들이 매일 쓰는 흐름 안에 자연스럽게 들어갈 때 힘이 생긴다고 생각합니다. 업무용 Agent에는 각 도메인 전문가의 지식도 꼭 필요하다고 보고 있습니다. 그래서 에이전트와 MCP 서버를 쉽게 만들고 배포하는 환경, 여러 LLM을 같은 방식으로 쓰는 게이트웨이, 그리고 한 번 만든 뒤에도 계속 굴러가는 운영 자동화를 만들고 있습니다.",
      en: "I believe AI becomes useful when it fits naturally into the way people already work, not when the model itself is treated as the product. For business agents, I also think domain expert knowledge is essential. I build environments for developing and deploying agents and MCP servers, gateways for using different LLMs consistently, and automation that keeps running after the first demo is over."
    }
  },

  // ── 링크 (순서대로 표시, 없애려면 해당 줄 삭제) ─────────
  links: [
    { label: "GitHub",   url: "https://github.com/HASEONGHEON",                                      icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/%EC%84%B1%ED%97%8C-%ED%95%98-162794317/", icon: "linkedin" },
    { label: "Email",    url: "mailto:123skfro@gmail.com",               icon: "email" },
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
        ko: "요즘은 AI Agent와 LLM이 데모에서 끝나지 않고 실제 업무 안에서 반복해서 쓰이려면 무엇이 필요할지 고민하고 있습니다. 사내 LLM API 게이트웨이, Agent/MCP 개발·배포 플랫폼, EKS 기반 개발 환경을 다루며 배포, 권한, 사용량, 모니터링처럼 잘 보이지 않지만 없으면 금방 무너지는 부분들을 정리하고 있습니다. 직접 만든 환경을 사내 실습 교육에서도 사용하며, 플랫폼이 사람들의 작업 방식과 맞아가는 과정을 보고 있습니다.",
        en: "These days I spend a lot of time thinking about what AI agents and LLMs need in order to be used repeatedly in real work, not just shown once as a demo. I work on an internal LLM API gateway, an Agent/MCP development and deployment platform, and EKS-based development environments, especially the less visible parts such as deployment, permissions, usage tracking, and monitoring. I also use these environments in internal hands-on training, which helps me see how a platform actually meets people's workflows."
      },
      tags: []
    }
  ],

  // ── 프로젝트 ────────────────────────────────────────────
  projects: [
    {
      title: { ko: "AWS Cloud Engineering", en: "AWS Cloud Engineering" },
      date:  "2025.06 - Present",
      role: { type: "team", detail: { ko: "공동 운영", en: "Co-ownership" } },
      sub: {
        ko: "클라우드 인프라 운영 및 플랫폼 엔지니어링",
        en: "Cloud Infrastructure Operations and Platform Engineering"
      },
      body: {
        ko: "AI 개발 플랫폼과 LLM 서비스가 올라가는 EKS 클러스터를 함께 운영하고 있습니다. Kubernetes 워크로드, 모니터링과 로그, 리소스 관리, Helm 기반 배포 방식을 정리하며 서비스가 안정적으로 올라가고 문제 상황을 추적할 수 있는 운영 기반을 다루고 있습니다. 개발자가 매번 인프라 세부 설정을 의식하지 않아도 되는 환경을 만드는 데 중점을 두었습니다.",
        en: "I help operate the EKS clusters that host our AI development platforms and LLM services. The work covers Kubernetes workloads, monitoring and logs, resource management, and Helm-based deployment patterns, with an emphasis on stable service operation and traceable incidents. I focused on making the infrastructure less something developers have to think about for every deployment."
      },
      tags: ["EKS", "Kubernetes", "Prometheus", "Grafana", "Helm", "ArgoCD", "GitLab CI", "Terraform", "Karpenter"]
    },
    {
      title: { ko: "AX-Dev Platform", en: "AX-Dev Platform" },
      date:  "2025.12 - Present",
      role: { type: "solo" },
      sub: {
        ko: "클라우드 IDE 개발 환경 및 AI Agent / MCP 서버 자동 배포 플랫폼",
        en: "Cloud IDE Development Environment and AI Agent / MCP Server Auto-Deployment Platform"
      },
      body: {
        ko: "Agent나 MCP 서버 개발자가 인프라 준비보다 로직 구현에 집중할 수 있도록 만든 클라우드 기반 개발·배포 플랫폼입니다. Coder 기반 개발 환경을 템플릿으로 제공하고, 작성한 코드를 스냅샷 형태로 배포 환경에 옮겨 실행하도록 구성했습니다. Kubernetes DNS와 사용자별 실행 환경을 이용해 개발·배포·런타임 사이의 연결 흐름을 단순화했습니다.",
        en: "This is a cloud-based development and deployment platform for agent and MCP server developers to focus more on business logic than infrastructure setup. It provides Coder-based development environments as templates and moves written code into the runtime environment as snapshots. Kubernetes DNS and user-scoped execution environments simplify the connection between development, deployment, and runtime."
      },
      tags: ["Kubernetes", "Coder", "ECR", "Docker", "EKS", "Route53"]
    },
    {
      title: { ko: "LLM API 서비스", en: "LLM API Service" },
      date:  "2026.01 - Present",
      role: { type: "team", detail: { ko: "신청 페이지 · Langfuse 모니터링 · 거버넌스 · 사용량 조회", en: "Request Page · Langfuse Monitoring · Governance · Usage Dashboard" } },
      sub: {
        ko: "사내 LLM 통합 게이트웨이",
        en: "Internal LLM Unified Gateway"
      },
      body: {
        ko: "LiteLLM 기반 게이트웨이에서 Azure, Bedrock, 자체 추론 모델을 OpenAI 호환 인터페이스로 통합하는 작업에 참여했습니다. 신청, 권한, 모니터링, 토큰 사용량 조회 흐름을 함께 정리해 여러 모델을 하나의 운영 체계 안에서 사용할 수 있도록 구성했습니다. 모델 호출 자체뿐 아니라 누가 어떤 모델을 어떻게 사용하는지 확인할 수 있는 관리 기능을 다뤘습니다.",
        en: "I worked on a LiteLLM-based gateway that brings Azure, Bedrock, and internal inference models behind an OpenAI-compatible interface. I also helped organize request, permission, monitoring, and token usage flows so multiple models could be used within one operating structure. Beyond model calls themselves, I worked on management features that show who is using which model and how."
      },
      tags: ["LiteLLM", "Langfuse", "Azure", "Bedrock"]
    },
    {
      title: { ko: "CLI Agent", en: "CLI Agent" },
      date:  "2026.05 - Present",
      role: { type: "solo" },
      sub: {
        ko: "opencode 기반 사내 CLI 에이전트",
        en: "Internal CLI Agent Based on opencode"
      },
      body: {
        ko: "opencode를 기반으로, 로컬과 클러스터 개발 환경에서 바로 실행할 수 있는 사내 CLI 에이전트를 만들고 있습니다. 터미널 안에서 코드베이스를 읽고, 파일 수정·명령 실행·검증까지 이어지는 개발 흐름을 에이전트가 직접 다룰 수 있도록 사내 LLM API와 연동했습니다. 반복적인 개발·운영 작업을 대화형으로 처리하고, 필요한 경우 메신저를 통해 원격으로 작업을 요청하는 방식도 함께 실험하고 있습니다.",
        en: "I am building an internal CLI agent based on opencode that can run directly in local and cluster development environments. It connects to the internal LLM API so the agent can work inside the terminal, read the codebase, edit files, run commands, and verify changes as part of the development flow. I use it to handle repetitive development and operations tasks conversationally, and I am also experimenting with messenger-based remote requests when needed."
      },
      tags: ["opencode", "messenger", "Vertex AI"]
    },
    {
      title: { ko: "AI Agent", en: "AI Agent" },
      date:  "2025.02 - Present",
      role: { type: "team", detail: { ko: "현업 협업 · ETL 파이프라인 · 인덱스 설계", en: "Business Collaboration · ETL Pipeline · Index Design" } },
      sub: {
        ko: "품질·재무 등 현업 도메인과 함께 만든 AI 에이전트",
        en: "AI Agents Built with Quality, Finance, and Other Business Domains"
      },
      body: {
        ko: "품질과 재무 도메인을 중심으로, 현업과 함께 AI Agent를 만드는 과제에 참여했습니다. 문서, 기록, 설명처럼 비정형에 가까운 현업 데이터를 Agent가 활용할 수 있도록 Airflow DAG 기반 ETL 흐름을 구성하고, Elasticsearch와 Neo4j를 운영하며 검색 인덱스와 그래프 구조를 정리했습니다. 도메인마다 데이터의 의미와 질문 방식이 달라서, 현업 전문가의 지식이 Agent 설계 과정에 함께 들어가는 것이 중요했습니다.",
        en: "I participated in AI agent projects built together with business teams, mainly around quality and finance domains. To make business data such as documents, records, and explanations usable by agents, I built ETL flows with Airflow DAGs, operated Elasticsearch and Neo4j, and shaped search indexes and graph structures. Since the meaning of data and the way questions are asked differ by domain, domain expert knowledge was an important part of the agent design process."
      },
      tags: ["LangChain", "LangGraph", "RAG", "Airflow", "GraphDB", "Elasticsearch", "Neo4j"]
    }
  ],

  // ── 기술 스택 ────────────────────────────────────────────
  skills: [
    {
      label: "Cloud & Infrastructure",
      tags: ["EKS", "EC2", "IaC(Terraform)", "Karpenter", "Grafana", "Datadog", "Prometheus", "kwatch"]
    },
    {
      label: "Container & GitOps",
      tags: ["Kubernetes", "Docker", "Helm", "ArgoCD", "GitLab CI"]
    },
    {
      label: "AI Agent",
      tags: ["LangChain", "LangGraph", "RAG", "MCP"]
    },
  ]
};
