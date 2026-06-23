const DATA = {

  // ── 프로필 ──────────────────────────────────────────────
  profile: {
    photo: "profile.png",
    name:  { ko: "하성헌", en: "Ha SeongHeon" },
    role:  {
      ko: "LiDAR · Vision · Multi-modal AI Researcher",
      en: "LiDAR · Vision · Multi-modal AI Researcher"
    },
    bio: {
      ko: "센서 데이터로 현실을 읽고, AI로 공간을 이해합니다.",
      en: "Reading the world through sensor data, understanding space with AI."
    }
  },

  // ── 링크 ──────────────────────────────────────────────
  links: [
    { label: "Home / CV", url: "https://haseongheon.github.io/", icon: "home" },
    { label: "Email",     url: "mailto:123skfro@gmail.com", icon: "email" }
  ],

  // ── 섹션 순서 ────────────────────────────────────────────
  sections: ["education", "research", "projects"],

  // ── 학력 ──────────────────────────────────────────────
  education: [
    {
      title: { ko: "부산대학교 인공지능융합학과", en: "Pusan National University — AI Convergence" },
      date:  "2023.03 – 2025.02",
      sub: {
        ko: `석사 과정 · <a href="https://pnu-viplab.github.io/" target="_blank" rel="noopener">Visual Intelligence and Perception Lab</a>`,
        en: `M.S. Program · <a href="https://pnu-viplab.github.io/" target="_blank" rel="noopener">Visual Intelligence and Perception Lab</a>`
      },
      body: [
        { ko: "LiDAR Point Cloud 기반 3D Semantic Segmentation 연구", en: "LiDAR point-cloud-based 3D semantic segmentation" },
        { ko: "멀티 센서 퓨전 · 멀티모달 딥러닝 연구",               en: "Multi-sensor fusion & multi-modal deep learning" },
        { ko: "Stereo Camera 기반 수어 인식 - LLM 기반 대화 연구",                                 en: "Stereo Camera-based Sign Language Recognition - LLM-based Dialogue" }
      ]
    },
    {
      title: { ko: "부산대학교 기계공학부", en: "Pusan National University — Mechanical Engineering" },
      date:  "2017.03 – 2023.02",
      sub: {
        ko: "기계공학사",
        en: "B.S. in Mechanical Engineering"
      }
    },
    {
      title: { ko: "대륜고등학교", en: "Daeryun High School" },
      date:  "– 2016.02",
      sub: { ko: "졸업", en: "Graduated" }
    }
  ],

  // ── 연구 (Featured Research) ──────────────────────────
  research: {
    paperTitle: {
      ko: "Interdimensional Knowledge Transfer for Semantic Segmentation on LiDAR Point Clouds",
      en: "Interdimensional Knowledge Transfer for Semantic Segmentation on LiDAR Point Clouds"
    },
    meta: [
      {
        ko: `Ha, SeongHeon, et al., "Interdimensional Knowledge Transfer for Semantic Segmentation on LiDAR Point Clouds," IEEE Robotics and Automation Letters (RA-L), 2024.`,
        en: `Ha, SeongHeon, et al., "Interdimensional Knowledge Transfer for Semantic Segmentation on LiDAR Point Clouds," IEEE Robotics and Automation Letters (RA-L), 2024.`,
        url: "https://ieeexplore.ieee.org/document/10592641"
      }
    ],
    topics: [
      { ko: "Point Cloud 기반 3D Semantic Segmentation", en: "Point-Cloud-Based 3D Semantic Segmentation" },
      { ko: "멀티 센서 퓨전 & Multi-Modal Deep Learning", en: "Multi-Sensor System & Multi-Modal Deep Learning" },
      { ko: "Human Pose Estimation", en: "Human Pose Estimation" },
      { ko: "Sign Language Recognition-Translation (SLRT)", en: "Sign Language Recognition-Translation (SLRT)" }
    ],
    blocks: [
      {
        heading: { ko: "멀티 센서 퓨전 & Knowledge Distillation", en: "Multi-Sensor Fusion & Knowledge Distillation" },
        body: [
          {
            ko: "자율주행 환경 LiDAR Point Cloud Segmentation — 단일 센서 한계 극복을 위해 RGB 카메라 정보를 학습 시에만 보조 활용",
            en: "LiDAR point cloud segmentation for autonomous driving — RGB camera used as auxiliary supervision during training only"
          },
          {
            ko: "Knowledge Distillation 적용 → 추론 시 연산 비용 절감 + 성능 개선",
            en: "Knowledge distillation → reduced inference cost with improved performance"
          }
        ],
        media: [
          {
            src: "assets/research/distillation-compare.png",
            alt: { ko: "Distillation 비교", en: "Distillation comparison" },
            caption: {
              ko: "(a) RGB 영상과 Point Cloud  (b) Ground Truth  (c) Distillation 미적용  (d) Distillation 적용 (Ours)",
              en: "(a) RGB image & point cloud  (b) ground truth  (c) without distillation  (d) with distillation (ours)"
            }
          },
          {
            src: "assets/research/demo-distillation.gif",
            alt: { ko: "Distillation 결과 영상", en: "Distillation result animation" },
            caption: {
              ko: "Distillation 적용 결과(Ours)와 GT 비교 영상",
              en: "Animated comparison of the distilled prediction (ours) and ground truth"
            }
          }
        ]
      },
      {
        heading: {
          ko: "전체 파이프라인 & Interdimensional Alignment Module (IAM)",
          en: "Overall Pipeline & Interdimensional Alignment Module (IAM)"
        },
        body: [
          {
            ko: "3D GT → 2D Projection으로 2D 라벨 생성, 2D 네트워크 지도 학습 / IAM으로 2D·3D 정보 융합",
            en: "3D GT projected to 2D labels for 2D network supervision / IAM fuses 2D and 3D information"
          },
          {
            ko: "IAM 강화 정보 → FocalKLD Loss로 3D 네트워크에 Distillation / 추론 시 3D Point Cloud만 입력",
            en: "IAM-enhanced features → distilled to 3D network via FocalKLD / inference with 3D point cloud only"
          },
          {
            ko: "IAM: Key·Value 모달리티 간 교차 융합 / FocalKLD: KD 시 클래스 불균형 완화",
            en: "IAM: cross-modal Key/Value fusion / FocalKLD: mitigates class imbalance during distillation"
          }
        ],
        media: [
          {
            src: "assets/research/pipeline-iam.png",
            alt: { ko: "전체 파이프라인", en: "Overall pipeline" },
            caption: {
              ko: "전체 파이프라인: 2D/3D Backbone, IAM, FocalKLD를 통한 Distillation",
              en: "Overall pipeline: 2D/3D backbones, IAM, and FocalKLD-based distillation"
            }
          }
        ],
        mediaRow: [
          {
            src: "assets/research/iam-module.png",
            alt: { ko: "IAM 구조", en: "IAM architecture" },
            caption: { ko: "Interdimensional Alignment Module (IAM) 구조", en: "Interdimensional Alignment Module (IAM) architecture" }
          },
          {
            formula: true,
            video: "assets/research/sign-language-demo2.mp4",
            rate: 2,
            caption: { ko: "FocalKLD 수식 (KL Divergence 대비)", en: "FocalKLD formulation, compared with standard KL divergence" }
          }
        ]
      },
      {
        heading: { ko: "실험 결과", en: "Experiment Results" },
        body: [],
        media: [
          {
            src: "assets/research/results-compare.png",
            alt: { ko: "정성적 비교 결과", en: "Qualitative comparison results" },
            caption: {
              ko: "(a) 2DPASS [11]  (b) Ours  (c) GT — Distillation 비교 결과 및 시각화 비교",
              en: "(a) 2DPASS [11]  (b) Ours  (c) GT — distillation comparison and visualization results"
            }
          }
        ],
        legend: [
          { color: "#bdf692", ko: "지면",          en: "terrain" },
          { color: "#17b517", ko: "초목",          en: "vegetation" },
          { color: "#ffe170", ko: "기둥",          en: "pole" },
          { color: "#ffc809", ko: "건물",          en: "building" },
          { color: "#ff3636", ko: "사람",          en: "person" },
          { color: "#ff8547", ko: "울타리",        en: "fence" },
          { color: "#723872", ko: "보도",          en: "sidewalk" },
          { color: "#833600", ko: "나무 둥치",      en: "trunk" },
          { color: "#ff2fff", ko: "도로",          en: "road" },
          { color: "#ff45ce", ko: "자전거 운전자",  en: "bicyclist" },
          { color: "#911452", ko: "오토바이 운전자", en: "motorcyclist" },
          { color: "#4bffff", ko: "기타 객체",      en: "other-object" },
          { color: "#5c91f5", ko: "차량",          en: "car" }
        ],
        mediaAfterLegend: [
          {
            src: "assets/research/demo-results.gif",
            alt: { ko: "정성적 비교 영상", en: "Qualitative comparison animation" },
            caption: {
              ko: "정성적 비교 결과 (Ours vs GT)",
              en: "Qualitative comparison animation (ours vs. GT)"
            }
          }
        ],
        // notes: [
        //   {
        //     label: { ko: "Description", en: "Description" },
        //     body: {
        //       ko: "이전 모델 대비 정량적·정성적 성능 우수 — 특히 소수 클래스에서 강점",
        //       en: "Outperforms prior models quantitatively and qualitatively — especially strong on minority classes."
        //     }
        //   },
        //   {
        //     label: { ko: "Limitation", en: "Limitation" },
        //     body: {
        //       ko: "FocalKLD 하이퍼파라미터 — 데이터셋별 수동 튜닝 필요",
        //       en: "FocalKLD hyperparameters must be manually tuned per dataset."
        //     }
        //   }
        // ]
      }
    ]
  },

  // ── 논문 목록 ─────────────────────────────────────────
  publications: [
    {
      title: {
        ko: "지식 증류를 활용한 한국수어 인식 및 LLM 기반 한국수어-한국어 대화 프레임워크 연구",
        en: "Korean Sign Language Recognition Using Knowledge Distillation and LLM-Based KSL–Korean Dialogue Framework"
      },
      meta: [
        {
          ko: "하성헌, \"지식 증류를 활용한 한국수어 인식 및 LLM 기반 한국수어-한국어 대화 프레임워크 연구,\" 공학석사 학위논문, 부산대학교 대학원, 2025.",
          en: "Ha, SeongHeon, \"Korean Sign Language Recognition Using Knowledge Distillation and LLM-Based KSL–Korean Dialogue Framework,\" M.Eng. Thesis, Pusan National University, 2025."
        }
      ],
      topics: [
        { ko: "연속 수어 인식 (CSLR)", en: "Continuous Sign Language Recognition (CSLR)" },
        { ko: "이미지·키포인트 이중 네트워크", en: "Image–Keypoint Dual Network" },
        { ko: "Knowledge Distillation", en: "Knowledge Distillation" },
        { ko: "LLM Fine-tuning (GPT-3.5)", en: "LLM Fine-tuning (GPT-3.5)" },
        { ko: "배경 강인성", en: "Background Robustness" }
      ],
      blocks: [
        {
          heading: { ko: "전체 대화 프레임워크", en: "Overall Dialogue Framework" },
          body: [
            { ko: "RGB 영상 입력 → 키포인트 추출 → 연속 수어 인식 → 한국수어 말뭉치 → Fine-tuned GPT로 한국어 번역 및 답변 생성", en: "RGB frames → keypoint extraction → CSLR → KSL glosses → fine-tuned GPT translates & generates Korean response" },
            { ko: "CoT + Few-shot 프롬프트로 단계별 출력: (1) 한국어 번역 (2) 맥락 답변", en: "CoT + few-shot prompting for two-stage output: (1) Korean translation, (2) contextual response" }
          ],
          media: [
            {
              src: "assets/research/thesis-framework.png",
              alt: { ko: "전체 대화 프레임워크", en: "Overall dialogue framework" },
              caption: { ko: "수어 인식 모델 → 말뭉치 변환 → Fine-tuned GPT → 최종 답변", en: "SLR model → gloss conversion → Fine-tuned GPT → final response" }
            }
          ]
        },
        {
          heading: { ko: "이중 네트워크 & 지식 증류", en: "Dual Network & Knowledge Distillation" },
          body: [
            { ko: "이미지 네트워크: 상관관계 모듈(프레임 간 신체 궤적) + 식별 모듈(전경 강조)로 시공간 정보 추출", en: "Image network: Correlation module (inter-frame body trajectory) + Discrimination module (foreground emphasis) for spatio-temporal features" },
            { ko: "키포인트 네트워크: 123개 키포인트(손 42 + 몸통·얼굴 81) → ResNeXt → 1D CNN → BiLSTM 분류기", en: "Keypoint network: 123 keypoints (hands 42 + body/face 81) → ResNeXt → 1D CNN → BiLSTM classifier" },
            { ko: "학습 시 두 네트워크 융합 후 KL Divergence로 키포인트 네트워크에 지식 전달 → 추론 시 키포인트만 사용", en: "Training: fuse both networks, transfer knowledge via KL divergence → inference with keypoint network only (background-robust)" }
          ],
          media: [
            {
              src: "assets/research/thesis-network.png",
              alt: { ko: "수어 인식 네트워크 전체 구조", en: "Full SLR network architecture" },
              caption: { ko: "이미지·키포인트 이중 네트워크와 Knowledge Distillation 구조", en: "Image–keypoint dual network and Knowledge Distillation pipeline" }
            }
          ]
        },
        {
          heading: { ko: "키포인트 처리 & LLM", en: "Keypoint Processing & LLM" },
          body: [
            { ko: "RTMPose로 추출한 키포인트 → min-max 정규화 → 인종·성별·카메라 거리 무관한 일반화", en: "RTMPose keypoints → min-max normalization → invariant to race, gender, camera distance" },
            { ko: "GPT-3.5-turbo-1106 파인튜닝 (91,320 토큰) — CoT·Few-shot으로 수어 말뭉치를 자연어 대화로 변환", en: "GPT-3.5-turbo-1106 fine-tuned (91,320 tokens) — CoT & few-shot prompting converts KSL glosses to natural-language dialogue" }
          ],
          mediaRow: [
            {
              src: "assets/research/thesis-keypoint.png",
              alt: { ko: "키포인트 시각화", en: "Keypoint visualization" },
              caption: { ko: "원본 이미지 · 추출 키포인트 · 오른손 · 왼손", en: "Original image · extracted keypoints · right hand · left hand" }
            },
            {
              src: "assets/research/thesis-llm.png",
              alt: { ko: "LLM 개념도", en: "LLM pipeline diagram" },
              caption: { ko: "Fine-tuned GPT-3.5: CoT + Few-shot → 한국어 번역 & 답변", en: "Fine-tuned GPT-3.5: CoT + few-shot → Korean translation & response" }
            }
          ]
        },
        {
          heading: { ko: "실험 결과", en: "Experimental Results" },
          body: [
            { ko: "PHOENIX-14 WER 18.9% — 비교 모델 대비 최고 성능 (CorrNet 19.4%, DNF 22.9%)", en: "PHOENIX-14 WER 18.9% — best among compared models (CorrNet 19.4%, DNF 22.9%)" },
            { ko: "CSL-Daily WER 26.9% — 전체 1위 (RGB+keypoint), keypoint 단독도 경쟁력 있는 성능", en: "CSL-Daily WER 26.9% — top-1 overall (RGB+keypoint); keypoint-only also competitive" },
            { ko: "AI-Hub 한국수어 WER 1.09% — 공식 기준 모델(8.88%) 대비 8× 향상", en: "AI-Hub Korean SL WER 1.09% — 8× improvement over official baseline (8.88%)" },
            { ko: "배경 강인성: 병원·도서관·정원 배경 교체 실험에서 CorrNet 대비 월등한 성능 유지 (~25% vs 25–58%)", en: "Background robustness: keypoint-only holds ~25% WER across hospital/library/garden backgrounds vs. CorrNet (25–58%)" }
          ],
          media: [
            {
              src: "assets/research/thesis-bg-replace.png",
              alt: { ko: "배경 변경 실험", en: "Background replacement experiment" },
              caption: { ko: "배경 교체 실험 — 다양한 실제 환경에서 키포인트 기반 추론의 강인성 검증", en: "Background replacement experiment — validating keypoint-only inference robustness across diverse real-world environments" }
            }
          ]
        }
      ]
    },
    {
      title: {
        ko: "Silent Speech Recognition Framework: Knowledge Distillation of Lip Reading Using Image and Keypoint Networks",
        en: "Silent Speech Recognition Framework: Knowledge Distillation of Lip Reading Using Image and Keypoint Networks"
      },
      meta: [
        {
          ko: `Ha, SeongHeon, et al., "Silent Speech Recognition Framework: Knowledge Distillation of Lip Reading Using Image and Keypoint Networks," ICEIC, 2025.`,
          en: `Ha, SeongHeon, et al., "Silent Speech Recognition Framework: Knowledge Distillation of Lip Reading Using Image and Keypoint Networks," ICEIC, 2025.`
        }
      ],
      topics: [
        { ko: "Lip Reading", en: "Lip Reading" },
        { ko: "Knowledge Distillation", en: "Knowledge Distillation" },
        { ko: "Keypoint Estimation", en: "Keypoint Estimation" },
        { ko: "Silent Speech Recognition", en: "Silent Speech Recognition" }
      ],
      blocks: [
        {
          heading: { ko: "Face Processing", en: "Face Processing" },
          body: [
            { ko: "YOLOv11로 얼굴 검출 후 RTMPose로 61개 2D 키포인트 추출", en: "YOLOv11 face detection → RTMPose 61 keypoint extraction" },
            { ko: "배경 변화 제거 및 개인별 얼굴 특성 정규화", en: "Background noise removal and normalization across individual facial variations" }
          ],
          media: [
            {
              src: "assets/research/lipreading-face-processing.png",
              alt: { ko: "얼굴 처리 파이프라인", en: "Face processing pipeline" },
              caption: { ko: "YOLOv11 얼굴 검출 → RTMPose 키포인트 추출", en: "YOLOv11 face detection → RTMPose keypoint extraction" }
            }
          ]
        },
        {
          heading: { ko: "Fused Multi-modal Knowledge Distillation", en: "Fused Multi-modal Knowledge Distillation" },
          body: [
            { ko: "이미지(2D CNN) · 키포인트(ResNeXt) 이중 브랜치 독립 학습 후 특징 융합", en: "Dual-branch (2D CNN / ResNeXt) independent training with feature fusion" },
            { ko: "추론 시 키포인트 네트워크만 사용 → 경량·고속, 배경 변화에 강인", en: "Inference with keypoint network only → lightweight, fast, robust to background variation" }
          ],
          media: [
            {
              src: "assets/research/lipreading-architecture.png",
              alt: { ko: "전체 아키텍처", en: "Overall architecture" },
              caption: { ko: "이중 브랜치 네트워크 및 Fused Multi-modal Knowledge Distillation 구조", en: "Dual-branch network and Fused Multi-modal Knowledge Distillation architecture" }
            }
          ]
        }
      ]
    }
  ],

  // ── 프로젝트 ────────────────────────────────────────────
  projects: [
    {
      title: {
        ko: "청각장애인을 위한 AI 기반 대화형 전시 수어 안내 서비스",
        en: "AI-Based Interactive Sign-Language Guide Service for the Hearing Impaired"
      },
      date:  "2023.04 – 2024.12",
      status: "done",
      sub: {
        ko: "한국 수어 인식 기술 및 LLM 기반 한국어-한국수어 대화형 안내 서비스 구축",
        en: "Korean Sign Language Recognition Technology and LLM-Based Interactive Korean-Korean Sign Language Guide Service"
      },
      body: [
        { ko: "다중 스테레오 카메라 기반 수어 인식 시스템 구축 (데이터 전처리·어노테이션)", en: "Built multi-stereo-camera sign-language recognition system (preprocessing & annotation)" },
        { ko: "기술이전 → 실제 전시 서비스 적용",                                          en: "Technology-transferred for real-world exhibition deployment" },
        { ko: "학습: 이미지·키포인트 네트워크 융합 (Correlation/Discrimination) → 키포인트 네트워크에 지식 전달", en: "Training: image/keypoint fusion via Correlation/Discrimination → knowledge transfer to keypoint network" },
        { ko: "추론: 실시간 키포인트 → 1D CNN + BiLSTM으로 수어 인식·번역",               en: "Inference: real-time keypoints → 1D CNN + BiLSTM for recognition & translation" }
      ],
      media: [
        {
          src: "assets/research/slr-architecture.png",
          alt: { ko: "수어 인식-번역 네트워크 구조", en: "Sign language recognition-translation network architecture" },
          caption: {
            ko: "이미지·키포인트 네트워크 융합 및 1D CNN + BiLSTM 분류기 구조",
            en: "Image/keypoint network fusion and 1D CNN + BiLSTM classifier architecture"
          }
        },
        {
          video: "assets/research/sign-language-demo.mp4",
          rate: 2,
          caption: {
            ko: "수어 인식-번역 시스템 데모 영상",
            en: "Sign language recognition-translation system demo"
          }
        }
      ],
      tags: ["Sign Language Recognition", "Multi-Camera", "ETRI", "Data Annotation", "Sign Language Translation", "Keypoint Estimation", "BiLSTM", "Knowledge Distillation"]
    },
    {
      title: { ko: "삼성중공업 — Drone View Segmentation", en: "Samsung Heavy Industries — Drone View Segmentation" },
      date:  "2023",
      status: "done",
      sub: {
        ko: "산학협력 프로젝트 · YOLOv8 + Segment Anything Model (SAM)",
        en: "Industry–academia collaboration · YOLOv8 + Segment Anything Model (SAM)"
      },
      body: [
        { ko: "드론 영상 기반 Image Semantic Segmentation 수행",              en: "Image semantic segmentation on drone-view imagery" },
        { ko: "YOLOv8 + SAM 오픈소스 모델 결합으로 높은 정확도 달성",         en: "Combined YOLOv8 + SAM open-source models for high accuracy" },
        { ko: "원본 이미지 / 예측 결과 / GT 3-way 정성적 평가 진행",           en: "Qualitative 3-way evaluation: input image / prediction / ground truth" }
      ],
      media: [
        {
          src: "assets/research/conference-presentation.jpg",
          alt: { ko: "경진대회 발표", en: "Competition presentation" },
          caption: {
            ko: "2023년 스마트해도 전문인력양성사업 경진대회 발표 장면",
            en: "Presenting results at the 2023 Smart Nautical Chart Workforce Development Competition"
          }
        }
      ],
      tags: ["YOLOv8", "SAM", "Segmentation", "Drone Imagery"]
    },
    {
      title: { ko: "항만 객체 식별 및 위치 추적 시스템", en: "Port Object Detection & Distance Tracking System" },
      date:  "2023",
      status: "done",
      sub: {
        ko: "CCTV 기반 크레인-트럭 상대 거리 추정",
        en: "CCTV-based crane–truck relative distance estimation"
      },
      body: [
        { ko: "이동 중인 크레인의 CCTV 영상에서 특정 레일 구역 내 트럭 위치 판별",   en: "Detected truck occupancy in specific rail zones from a moving crane's CCTV feed" },
        { ko: "카메라 FOV 기준점이 계속 이동 → 구역 고정 불가 문제 해결",            en: "Solved shifting FOV reference point problem that prevented fixed-zone definition" },
        { ko: "픽셀 표현력 상수(r)와 비례식 도입으로 크레인-트럭 실제 거리 계산",    en: "Introduced pixel-scale constant (r) and proportional relationship for real-world distance estimation" },
        { ko: "현장 검증: 비례식 정확도 및 레일 점유 판별 시스템 확인",              en: "On-site validation of proportional accuracy and rail-occupancy detection system" }
      ],
      tags: ["Object Detection", "Distance Estimation", "CCTV"]
    }
  ],

  // // ── 학부 프로젝트 & 대외활동 ─────────────────────────────
  // activities: [
  //   {
  //     title: { ko: "IDPP 구축 프로젝트", en: "IDPP System Development Project" },
  //     date: "2022.03"
  //   },
  //   {
  //     title: { ko: "풍력에너지 학회 포스터 발표", en: "Wind Energy Society — Poster Presentation" },
  //     date: "2021.11"
  //   },
  //   {
  //     title: { ko: "PNU Makers — 스마트 Diffuser 제작", en: "PNU Makers — Smart Diffuser Development" },
  //     date: "2021.07"
  //   },
  //   {
  //     title: { ko: "CodeCoach 교육 봉사동아리", en: "CodeCoach Education Volunteer Club" },
  //     date: "2021.02 – 2022.02",
  //     sub: {
  //       ko: "운영진(개발팀) · SW 교육 봉사 및 교육 자료 개발",
  //       en: "Operations / Dev Team · SW education volunteering & curriculum development"
  //     }
  //   },
  //   {
  //     title: { ko: "CUTECT 스마트 차수막 프로젝트", en: "CUTECT Smart Flood Barrier Project" },
  //     date: "2020.12"
  //   },
  //   {
  //     title: { ko: "사랑공학연구회", en: "Love Engineering Research Society" },
  //     date: "2020.09 – 2020.12",
  //     sub: {
  //       ko: "동아리 부원 · 청소년 대상 공학 봉사",
  //       en: "Member · Engineering outreach for youth"
  //     }
  //   },
  //   {
  //     title: { ko: "한국장학재단 푸른등대 교육봉사", en: "KOSAF Blue Lighthouse Education Volunteering" },
  //     date: "2018.01",
  //     sub: {
  //       ko: "학생 선생님 · 교육소외지역 학습 멘토링",
  //       en: "Student Teacher · Learning mentorship in underserved areas"
  //     }
  //   },
  //   {
  //     title: { ko: "부산대학교 기계공학부 학생회", en: "PNU Mechanical Engineering Student Council" },
  //     date: "2017.03 – 2022.12",
  //     sub: {
  //       ko: "실행부장 · 학과 행사 기획 및 학생 의견 수립",
  //       en: "Executive Director · Department event planning & student affairs"
  //     }
  //   }
  // ],

  // // ── 수상 ──────────────────────────────────────────────
  // awards: [
  //   {
  //     title: { ko: "한국전력연구원(KEPRI) 현장실습 우수상", en: "KEPRI Field Internship — Excellence Award" },
  //     date: "2022.08"
  //   },
  //   {
  //     title: { ko: "EPIC AWARD 공모전 최우수상", en: "EPIC AWARD Competition — Grand Prize" },
  //     date: "2022.01"
  //   },
  //   {
  //     title: { ko: "ARTECH 공모전 우수상", en: "ARTECH Competition — Excellence Award" },
  //     date: "2021.02"
  //   }
  // ]

};
