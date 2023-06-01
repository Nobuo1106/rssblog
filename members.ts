import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "nobuo",
    name: "Nobuo Igarashi",
    role: "Owner",
    bio:
      "iOSエンジニアにキャリアを戻したいWEBエンジニア",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://catnose.medium.com/feed",
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "nobuoaida",
    githubUsername: "Nobuo1106",
    websiteUrl: "https://web-portfolio-nobuo-igarashi.vercel.app/",
  }
];
