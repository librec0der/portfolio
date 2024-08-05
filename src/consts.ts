import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "libreC0der",
  DESCRIPTION: "Welcome to librec0der, where you will find projects and blog guides for network enthusiasts.",
  AUTHOR: "LibreCoder",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "librec0der@proton.me",
    HREF: "mailto:librec0der@proton.me",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "librec0der",
    HREF: "https://github.com/librec0der"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ShouldICreateOne?",
    HREF: "https://www.linkedin.com/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "ShouldICreateOne?",
    HREF: "https://twitter.com/",
  },
]

