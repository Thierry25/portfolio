import emoji from "react-easy-emoji";

export const greetings = {
  name: "Thierry Marcelin",
  title: "👋🏼 I'm Thierry😎",
  description:
    "I am in ❤️ with mobile development. I build Android applications and web applications🥳!",
  resumeLink:
    "https://drive.google.com/file/d/1USJm3kow8Wt_98SyNVpaJYCtT8avJySD/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Thierry25",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/Thierry25/",
  linkedin: "https://www.linkedin.com/in/daniel-thierry-marcelin-538173b3/",
  email: "mailto:marcelinthierry@gmail.com",
};

export const skillsSection = {
  title: "Skill Set",
  subTitle: "",
  skills: [
    emoji("✔ Knowledge of Java to build Android Apps & Web Applications."),
    emoji(
      "✔ Knowledge of Python for Machine Learning (Supervised & Unsupervised Learning)."
    ),
    emoji("✔ Knowledge of React for Single Page Applications."),
    emoji("✔ Knowledge of HTML5, CSS3, Javascript, Git and SQL Server."),
    emoji("✔ Knowledge of third party services such as Firebase, MongoDB."),
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "logos:java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Java",
    progressPercentage: "85",
  },
  {
    Stack: "Ruby",
    progressPercentage: "75",
  },
  {
    Stack: "Android App Development",
    progressPercentage: "70",
  },
  {
    Stack: "Python",
    progressPercentage: "70",
  },
  {
    Stack: "UI Design",
    progressPercentage: "60",
  },
];

export const projects = [
  {
    name: "ChatApp",
    desc:
      "An Android chat application that allows users to send text messages, images, audio, video and documents." +
      " Users are allowed to create groups of up to 128 users, and channels for mass communication. " +
      "They will also be able to add statuses that will disappear after 24 hours." +
      "Languages used: Java, XML \n" +
      "Platform: Android \n" +
      "Architecture: MVVM \n" +
      "Other technologies: Retrofit, Firebase, REST, JSON",
    github: "https://github.com/Thierry25/ChatApp/",
  },
  {
    name: "iBuy",
    desc:
      "A e-commerce that showcases different products. Users can log in/sign up, get product details, search for wanted products, " +
      "add products to cart and order products (Using Fake Paypal API)." +
      " The admin of the app can see all orders that have been placed and can add/remove products. \n" +
      "Languages used: Java, XML \n" +
      "Platform: Android \n " +
      "Architecture: MVVM  \n" +
      "Other technologies: Retrofit, Firebase, REST, JSON",
    github: "https://github.com/Thierry25/IBUY",
  },
  {
    name: "Jobify",
    desc:
      "A tool that allow job applicants to format their resume in a professional way and maximize their hiring possibility. " +
      "It offers three main functionalities: 1) Analyze Resume And Highlight important missing information, " +
      " 2) Return resume completeness percentage, 3) Change Resume Formats. \n" +
      "Languages used: Ruby, Slim, CSS, SQL \n" +
      "Test-Driven Development: Unit Tests, Integration Tests, Acceptance Tests (Selenium). \n" +
      "System Architecture: RESTful APIs (External API and created our own), Message-Driven Microservices. \n" +
      "Web Development: Web Sockets, Responsive Interface \n",
    github: "https://github.com/SOA-LouDLy/Jobify",
    link: "https://jobifyy.herokuapp.com",
  },
  {
    name: "EtaShare",
    desc:
      "An application that allows users to securely share documents with others, and select users that can access them \n" +
      "Security Features: Authentication (Encrypted Password and key-strecthing), Secure Databse that prevents mass-assignments. " +
      "Google OAuth, Token-based authentication, Email verification on registration, Signed requests between the application and the API. " +
      "Implemented Policies that will assure role of users. Create API KEY for users" +
      "Languages used: Ruby, Slim, CSS, SQL \n" +
      "Test-Driven Development: Unit Tests, Integration Tests, Acceptance Tests (Selenium). \n" +
      "System Architecture: RESTful APIs (Created our own), Message-Driven Microservices. \n",
    github: "https://github.com/Eta-Team/EtaShare-App",
    link: "https://etashare-app.herokuapp.com",
  },
];
