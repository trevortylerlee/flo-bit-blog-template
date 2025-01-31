import type { AccentColors, BaseColors } from "./types";

// when deploying to github pages, set this to your site url
// (e.g. "https://<your-github-username>.github.io")
export const SITE = "https://flo-bit.github.io";

// when deploying to github pages, set this to your repo name
// except if you're either using a custom domain or
// your repo name is <your-github-username>.github.io (in which case, set it to "")
export const BASE = "/blog-template";

// will be shown in the title and meta tags and og image
export const SITE_TITLE = "Blog template";
export const SITE_DESCRIPTION = "Welcome to my website!";
// will be used as the icon in the header and the favicon
export const SITE_FAVICON = "🙃";

// used in the footer (c) YOUR_NAME
export const NAME = "flo-bit";

// how many posts to show on per paginated page (also used for tag pages)
export const POSTS_PER_PAGE = 5;

// should we show the dark mode toggle?
// (otherwise, it will be based on the user's system preferences)
export const MANUAL_DARK_MODE = true;

// should we show the search bar?
export const SEARCH_ENABLED = true;

// shade of gray for the background
// one of 'gray', 'neutral', 'stone', 'zinc', 'slate'
export const BASE_COLOR: BaseColors = "stone";

// color of links, etc.
// one of 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
// 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
export const ACCENT_COLOR: AccentColors = "amber";

// set any of these to '' to hide the respective icon in the footer
export const FACEBOOK_URL = "";
export const TWITTER_URL = "https://x.com/flobit_dev";
export const GITHUB_URL = "https://github.com/flo-bit";
export const INSTAGRAM_URL = "https://www.instagram.com/flobit.dev/";
export const LINKEDIN_URL = "";
export const YOUTUBE_URL = "";
export const SUBSTACK_URL = "https://flo-bit.substack.com";
export const EMAIL = "flo.bit.dev@gmail.com";
