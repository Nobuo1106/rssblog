export const config = {
  siteMeta: {
    title: "Tech Blog",
    teamName: "Nobuo Igarashi",
    description: "I am gonna post once in a month",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "HP",
      href: "https://web-portfolio-nobuo-igarashi.vercel.app/",
    },
    {
      title: "GitHub",
      href: "https://github.com/catnose99/team-blog-hub",
    },
  ],
};
