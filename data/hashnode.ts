export type TPosts = {
  _id: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  wordCount: number;
};

export const posts = [
  {
    _id: "65a235df278eec74f51072c9",
    slug: "websockets-unlocked-mastering-the-art-of-real-time-communication",
    title: "WebSockets Unlocked:  Mastering the Art of Real-Time Communication",
    brief:
      "Hey there! 🌟 Ready to dive into the exciting world of real-time communication with WebSocket? 🚀 Join me in this series where we'll start from the basics, craft awesome chat/video apps, and master scaling with Redis and Kafka. Get set for a journey ...",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1705129128112/3d7964fd-c2a7-4ebf-895b-d041603fde46.png",
    dateAdded: "2024-01-13T07:03:59.773Z",
    readingTime: {
      text: "14 min read",
      minutes: 13.33,
      time: 799800,
      words: 2666,
    },
    wordCount: 2666,
  },
  {
    _id: "64ff01517b4fbf4119831891",
    slug: "will-bun-replace-node",
    title: "Will Bun replace Node ???",
    brief:
      "What is Bun?\nBun is a new runtime that provides an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called Bun, making your app run really fast.\nHow Does Bun Do It?\nUnlike other runtimes, such as Node or Deno, wh...",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1694282035778/db080909-6f92-483a-b1db-01792e9d0fdb.png",
    dateAdded: "2023-09-11T12:00:17.660Z",
    readingTime: {
      text: "3 min read",
      minutes: 2.415,
      time: 144900,
      words: 483,
    },
    wordCount: 506,
  },
  ,
  {
    _id: "642da535a7ccc50a04716f0a",
    slug: "before-you-commit-m",
    title: 'Before you Commit -m ""',
    brief:
      "When you're making changes to your personal or open-source projects, it's crucial to remember some important points before committing, especially when working in a team. Poorly managed commits can quickly cause chaos. That's why this blog is dedicate...",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1680711199803/1e656bd3-386f-48d2-8c6f-be5e7926eabe.png",
    dateAdded: "2023-04-05T16:43:33.257Z",
    readingTime: {
      text: "6 min read",
      minutes: 5.21,
      time: 312600,
      words: 1042,
    },
    wordCount: 1042,
  },
  {
    _id: "6369dc6d3dc38833f35c2fc1",
    slug: "7-mistakes-that-you-make-as-a-coder",
    title: "7 Mistakes that you make as a coder",
    brief:
      "Intro\nThese are some mistakes that everyone makes unknown and becoming conscious and avoiding these mistakes would level you up as a programmer and also save you precious time \nhere are some common mistakes\nNOT Reading the docs\nJumping into the game ...",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1667881846517/l_cqIws6D.png",
    dateAdded: "2022-11-08T04:34:53.448Z",
    readingTime: {
      text: "7 min read",
      minutes: 6.295,
      time: 377700,
      words: 1259,
    },
    wordCount: 1260,
  },
];
