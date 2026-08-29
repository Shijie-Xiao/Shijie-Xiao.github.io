// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "A full list of publications will appear here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and coursework projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my Resume for job.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-esports-gaze-behavior-detection",
          title: 'eSports Gaze Behavior Detection',
          description: "few-shot gaze tracking for personalized eSports assistance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-health-management-system",
          title: 'Health Management System',
          description: "health code and trip card system with risk evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-multi-agent-behavior-analysis",
          title: 'Multi-Agent Behavior Analysis',
          description: "geometric vision extraction and social attention inference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-fast-ml-hybrid-physics-ml-tropical-cyclone-forecasting",
          title: 'FAST-ML: Hybrid Physics-ML Tropical Cyclone Forecasting',
          description: "physics-informed neural networks for tropical cyclone intensity forecasting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-generative-ai-for-compound-flood-forecasting",
          title: 'Generative AI for Compound Flood Forecasting',
          description: "physics-based generative emulator for probabilistic hurricane flooding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-segmentation-with-noisy-labels-via-diffusion-models",
          title: 'Segmentation with Noisy Labels via Diffusion Models',
          description: "label-efficient segmentation using Stable Diffusion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-oct-speckle-denoising-with-diffusion-models",
          title: 'OCT Speckle Denoising with Diffusion Models',
          description: "DDPM-based denoising for OCT medical images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-musical-note-recognition-with-ocr",
          title: 'Musical Note Recognition with OCR',
          description: "text detection of musical notation using OCR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-cvpr-2023-bdd100k-challenges",
          title: 'CVPR 2023 BDD100K Challenges',
          description: "multi-object tracking and object detection for autonomous driving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-pangaeagpt",
          title: 'PangaeaGPT',
          description: "large language model applications and evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-llm-evaluation",
          title: 'LLM Evaluation',
          description: "evaluating conversational LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%73%6A%31%31%30%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Shijie-Xiao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shijie-xiao", "_blank");
        },
      },{
        id: 'social-leetcode_cn',
        title: 'Leetcode_cn',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.cn/u/competent-solomonrir/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
