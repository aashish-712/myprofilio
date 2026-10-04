const siteConfig = {
  profile: {
    name: 'Aashish',
    title: 'Aspiring AI Engineer & Data Scientist',
    tagline:
      'I’m a Computer Science student focused on Python, artificial intelligence, and data-driven problem solving.',
  },
  resume: {
    enabled: false,
    path: './resume.pdf',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/yourname',
    github: 'https://github.com/yourusername',
    email: 'your.email@example.com',
  },
  roleTexts: [
    'Aspiring AI Engineer',
    'Future Data Scientist',
    'Python Developer',
    'Machine Learning Enthusiast',
  ],
  skills: [
    {
      category: 'Programming',
      items: [
        { name: 'Python', level: 'Building Projects' },
        { name: 'Programming Fundamentals', level: 'Practicing' },
        { name: 'Object-Oriented Programming', level: 'Building Projects' },
      ],
    },
    {
      category: 'Numerical Computing',
      items: [{ name: 'NumPy', level: 'Learning' }],
    },
    {
      category: 'Artificial Intelligence & Data Science',
      items: [
        { name: 'Artificial Intelligence Fundamentals', level: 'Learning' },
        { name: 'Machine Learning Fundamentals', level: 'Learning' },
        { name: 'Data Science Fundamentals', level: 'Learning' },
        { name: 'Data Analysis', level: 'Learning' },
      ],
    },
    {
      category: 'Computer Science',
      items: [
        { name: 'Problem Solving', level: 'Practicing' },
        { name: 'Algorithms and Data Structures', level: 'Learning' },
        { name: 'Git and GitHub', level: 'Building Projects' },
      ],
    },
  ],
  projects: [
    {
      id: 'python-practice-tracker',
      title: 'Python Practice Tracker',
      category: 'Python Programming',
      status: 'in-progress',
      description:
        'A personal productivity dashboard to log Python exercises, track problem-solving consistency, and review progress over time.',
      problem:
        'I want a simple system to turn daily coding practice into measurable progress without losing momentum.',
      stack: ['Python', 'CSV', 'GitHub', 'Automation'],
      github: 'https://github.com/yourusername/python-practice-tracker',
      demo: '#',
      features: [
        'Daily coding streak tracking',
        'Session logging by topic',
        'Progress summaries and learning reflection notes',
      ],
      learning: [
        'Improving project structure and workflow consistency',
        'Practicing habits that make iterative improvement sustainable',
      ],
      challenge: 'Keeping a coding routine productive without overcomplicating the system.',
      solution: 'Designing a lightweight, focused tracker built around a simple, repeatable workflow.',
      image: './profolioimage.webp',
    },
    {
      id: 'data-analysis-dashboard',
      title: 'Data Analysis Dashboard',
      category: 'Data Analysis',
      status: 'planned',
      description:
        'A planned data exploration project for visualizing a small public dataset and uncovering patterns in an accessible way.',
      problem:
        'I want to practice turning raw data into insight using a clear, readable workflow that emphasizes reasoning and storytelling.',
      stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#',
      features: [
        'Exploratory data analysis workflow',
        'Simple charts and trend summaries',
        'Narrative-driven findings',
      ],
      learning: [
        'Strengthening my understanding of analysis and interpretation',
        'Learning how to present insights clearly and responsibly',
      ],
      challenge: 'Choosing a dataset and framing questions that lead to meaningful patterns.',
      solution: 'Starting with approachable datasets and focusing on clean analysis with a clear story.',
      image: './profolioimage.webp',
    },
    {
      id: 'ml-notebook-lab',
      title: 'Machine Learning Notebook Lab',
      category: 'Machine Learning',
      status: 'planned',
      description:
        'A planned experimental project to practice model building, evaluation, and visual explanation using a small supervised learning dataset.',
      problem:
        'I want hands-on exposure to the machine learning pipeline, from preprocessing to evaluation and reflection.',
      stack: ['Python', 'NumPy', 'Scikit-learn', 'Jupyter'],
      github: '#',
      demo: '#',
      features: [
        'Data cleaning and preprocessing',
        'Model training and evaluation comparison',
        'Simple model interpretability notes',
      ],
      learning: [
        'Deepening my understanding of model selection and metrics',
        'Learning how machine learning decisions are explained and validated',
      ],
      challenge: 'Understanding how different models behave under the same dataset conditions.',
      solution: 'Documenting the experiment clearly and comparing outcomes with a focus on reasoning.',
      image: './profolioimage.webp',
    },
  ],
  journey: [
    { title: 'Programming Fundamentals', status: 'Completed', accent: 'fundamental' },
    { title: 'Python and Object-Oriented Programming', status: 'Currently Learning', accent: 'python' },
    { title: 'Data Structures and Algorithms', status: 'Currently Learning', accent: 'algo' },
    { title: 'NumPy and Data Analysis', status: 'Currently Learning', accent: 'analysis' },
    { title: 'Statistics and Mathematics for Data Science', status: 'Planned', accent: 'stats' },
    { title: 'Machine Learning', status: 'Planned', accent: 'ml' },
    { title: 'Deep Learning and AI Applications', status: 'Planned', accent: 'ai' },
    { title: 'Real-World Projects and Portfolio Development', status: 'In Progress', accent: 'portfolio' },
  ],
  philosophy: [
    {
      step: 'Learn',
      text: 'Build a strong foundation by understanding the why behind concepts before chasing advanced tools.',
    },
    {
      step: 'Practice',
      text: 'Turn theory into repetition so skills become useful and reliable over time.',
    },
    {
      step: 'Build',
      text: 'Translate ideas into small real projects that teach more than passive study ever can.',
    },
    {
      step: 'Fail',
      text: 'Treat mistakes as signals that reveal where understanding is still incomplete.',
    },
    {
      step: 'Understand',
      text: 'Reflect on what broke, what worked, and what deeper concept is still missing.',
    },
    {
      step: 'Improve',
      text: 'Apply feedback and iterate with more intention, precision, and clarity.',
    },
    {
      step: 'Repeat',
      text: 'The process keeps compounding, and steady progress eventually becomes mastery.',
    },
  ],
  exploring: [
    {
      topic: 'Python Programming',
      status: 'Building Projects',
      note: 'Improving problem solving and writing cleaner, more readable code.',
      link: '#',
    },
    {
      topic: 'Problem Solving',
      status: 'Practicing',
      note: 'Working through algorithmic patterns and interview-style challenges.',
      link: '#',
    },
    {
      topic: 'NumPy',
      status: 'Learning',
      note: 'Exploring arrays, vectorized operations, and numerical thinking.',
      link: '#',
    },
    {
      topic: 'Computer Science Fundamentals',
      status: 'Building Foundations',
      note: 'Strengthening the basics behind efficient, thoughtful software design.',
      link: '#',
    },
    {
      topic: 'Artificial Intelligence',
      status: 'Learning',
      note: 'Studying concepts, foundations, and practical pathways into applied AI.',
      link: '#',
    },
    {
      topic: 'Data Science',
      status: 'Learning',
      note: 'Developing a structured understanding of data workflows and decision-making.',
      link: '#',
    },
    {
      topic: 'Machine Learning',
      status: 'Learning',
      note: 'Starting with core ideas, models, and evaluation strategies.',
      link: '#',
    },
  ],
};
