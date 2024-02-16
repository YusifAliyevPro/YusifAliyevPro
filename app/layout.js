import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "YusifAliyevPro",
    template: "YusifAliyevPro | %s",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  description:
    "This is my personal website. I will prepare it with NextJS as soon as possible",
  creator: "Yusif Aliyev",
  publisher: "Yusif Aliyev",
  applicationName: "YusifAliyevPro",
  generator: "YusifAliyevPro",
  keywords: [
    "yusifaliyevpro",
    "FilmIsBest",
    "yusifaliyevpro com",
    "yusif",
    "aliyev",
    "yusifaliyev",
    "yusifpro",
    "yusif aliyev pro",
    "YusifAliyevPro",
    "Yusif Əliyev",
    "Yusif Aliyev",
    "Yusif Aliyev Pro",
  ],
  authors: [{ name: "Yusif Aliyev", url: "https://yusifaliyevpro.com" }],
  siteName: "YusifAliyevPro",
  openGraph: {
    type: "website",
    siteName: "YusifAliyevPro",
    locale: "az_AZ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="az"
      className="dark bg-graybg text-white dark:bg-graybg dark:text-white light:bg-graybg light:text-white"
    >
      <head>
        <meta
          name="google-site-verification"
          content="19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
