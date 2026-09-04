import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroLoader } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aicommunitylucknow.live"),
  title: "AI Community Lucknow",
  description:
    "Building Lucknow's AI/ML community — workshops, hackathons, and a network of builders in the City of Nawabs.",
  keywords: [
    "AI Community Lucknow",
    "TFUG Lucknow",
    "Artificial Intelligence Lucknow",
    "Machine Learning Lucknow",
    "Lucknow Tech Community",
    "AI Hackathons Lucknow",
  ],
  authors: [{ name: "AI Community Lucknow" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "599x486" },
      { url: "/icon.png", sizes: "599x486", type: "image/png" },
      { url: "/brand/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "599x486", type: "image/png" }],
  },
  openGraph: {
    title: "AI Community Lucknow",
    description:
      "Building Lucknow's AI/ML community — workshops, hackathons, and a network of builders in the City of Nawabs.",
    url: "https://aicommunitylucknow.live",
    siteName: "AI Community Lucknow",
    type: "website",
    images: [{ url: "/brand/logo.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${clashDisplay.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-accent selection:text-bg">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-bg focus:px-4 focus:py-2.5 focus:rounded-global focus:font-mono focus:text-[10px] focus:uppercase focus:font-bold focus:outline-none focus:ring-2 focus:ring-fg"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          <IntroLoader />
          <GrainOverlay />
          <CustomCursor />
          <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-bg text-fg">
            <Navbar />
            <main id="main-content" className="flex-1 flex flex-col pt-[72px]" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
