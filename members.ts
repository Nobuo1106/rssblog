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
    twitterUsername: "catnose99",
    githubUsername: "catnose99",
    websiteUrl: "https://catnose99.com",
  }
];
