export interface GitHubLead {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  techStack: string[];
  repos: number;
  followers: number;
  aiScore: number;
  status: "hot" | "warm" | "cold";
  strengths: string[];
  weaknesses: string[];
  email?: string;
  website?: string;
}

export interface BusinessLead {
  id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  phone: string;
  rating: number;
  reviews: number;
  aiScore: number;
  status: "hot" | "warm" | "cold";
  badges: string[];
  strengths: string[];
  weaknesses: string[];
  website?: string;
}

export const githubLeads: GitHubLead[] = [
  {
    id: "gh-1",
    name: "Sarah Chen",
    username: "sarahcodes",
    avatar: "SC",
    bio: "Full-stack engineer passionate about React & AI/ML. Building the future one commit at a time.",
    location: "San Francisco, CA",
    techStack: ["React", "TypeScript", "Python", "TensorFlow"],
    repos: 87,
    followers: 2340,
    aiScore: 92,
    status: "hot",
    strengths: ["High engagement", "Active contributor", "AI/ML expertise", "Strong network"],
    weaknesses: ["No personal website"],
    email: "sarah@example.com",
    website: "sarahchen.dev",
  },
  {
    id: "gh-2",
    name: "Marcus Johnson",
    username: "marcusj",
    avatar: "MJ",
    bio: "DevOps engineer. Kubernetes enthusiast. Open source maintainer.",
    location: "Austin, TX",
    techStack: ["Go", "Kubernetes", "Terraform", "AWS"],
    repos: 45,
    followers: 1200,
    aiScore: 78,
    status: "warm",
    strengths: ["Open source maintainer", "DevOps niche", "Consistent activity"],
    weaknesses: ["Smaller audience", "Limited web presence"],
    email: "marcus@example.com",
  },
  {
    id: "gh-3",
    name: "Yuki Tanaka",
    username: "yukidev",
    avatar: "YT",
    bio: "Mobile developer specializing in React Native and Flutter.",
    location: "Tokyo, Japan",
    techStack: ["React Native", "Flutter", "Dart", "TypeScript"],
    repos: 32,
    followers: 890,
    aiScore: 71,
    status: "warm",
    strengths: ["Mobile expertise", "Cross-platform skills"],
    weaknesses: ["Low repo count", "Inactive last 30 days"],
  },
  {
    id: "gh-4",
    name: "Alex Rivera",
    username: "alexr",
    avatar: "AR",
    bio: "Junior dev learning Rust and systems programming.",
    location: "Miami, FL",
    techStack: ["Rust", "C++", "Linux"],
    repos: 12,
    followers: 150,
    aiScore: 35,
    status: "cold",
    strengths: ["Growing skillset"],
    weaknesses: ["Low engagement", "Small network", "Few projects"],
  },
  {
    id: "gh-5",
    name: "Priya Patel",
    username: "priyap",
    avatar: "PP",
    bio: "Data scientist & ML engineer. Kaggle Grandmaster. Love building intelligent systems.",
    location: "London, UK",
    techStack: ["Python", "PyTorch", "Scikit-learn", "SQL"],
    repos: 63,
    followers: 5400,
    aiScore: 96,
    status: "hot",
    strengths: ["Kaggle Grandmaster", "Huge following", "ML authority", "Active blogger"],
    weaknesses: ["Niche audience"],
    email: "priya@example.com",
    website: "priyapatel.ai",
  },
  {
    id: "gh-6",
    name: "Tom Eriksson",
    username: "tomdev",
    avatar: "TE",
    bio: "Backend engineer. Node.js & PostgreSQL. Building scalable APIs.",
    location: "Stockholm, Sweden",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    repos: 28,
    followers: 620,
    aiScore: 58,
    status: "warm",
    strengths: ["Backend focus", "DB expertise"],
    weaknesses: ["No frontend skills listed", "Moderate activity"],
  },
];

export const businessLeads: BusinessLead[] = [
  {
    id: "biz-1",
    name: "Sunrise Bakery",
    type: "Bakery",
    city: "Portland, OR",
    address: "1234 NW 23rd Ave",
    phone: "(503) 555-0142",
    rating: 4.6,
    reviews: 234,
    aiScore: 88,
    status: "hot",
    badges: ["No Website Found", "High Reviews"],
    strengths: ["Great ratings", "High foot traffic area", "Active on social media"],
    weaknesses: ["No website", "No online ordering"],
    website: undefined,
  },
  {
    id: "biz-2",
    name: "Elite Auto Repair",
    type: "Auto Repair",
    city: "Denver, CO",
    address: "567 Colfax Ave",
    phone: "(720) 555-0198",
    rating: 3.9,
    reviews: 87,
    aiScore: 74,
    status: "warm",
    badges: ["Needs SEO", "Outdated Website"],
    strengths: ["Established business", "Good location"],
    weaknesses: ["Outdated website", "Poor SEO ranking", "Few online reviews"],
    website: "eliteautorepair.biz",
  },
  {
    id: "biz-3",
    name: "Zen Yoga Studio",
    type: "Yoga Studio",
    city: "Austin, TX",
    address: "890 S Lamar Blvd",
    phone: "(512) 555-0176",
    rating: 4.8,
    reviews: 412,
    aiScore: 92,
    status: "hot",
    badges: ["No Website Found", "Needs SEO"],
    strengths: ["Excellent reviews", "Growing market", "Strong community"],
    weaknesses: ["No website", "No booking system", "Missing from Google organic"],
  },
  {
    id: "biz-4",
    name: "QuickPrint Solutions",
    type: "Print Shop",
    city: "Chicago, IL",
    address: "321 W Madison St",
    phone: "(312) 555-0133",
    rating: 4.1,
    reviews: 56,
    aiScore: 45,
    status: "cold",
    strengths: ["Central location"],
    weaknesses: ["Low online presence", "Few reviews", "Declining market"],
    badges: ["Low Reviews"],
    website: "quickprint.com",
  },
  {
    id: "biz-5",
    name: "Fresh Bites Catering",
    type: "Catering",
    city: "Seattle, WA",
    address: "456 Pike St",
    phone: "(206) 555-0189",
    rating: 4.4,
    reviews: 178,
    aiScore: 81,
    status: "warm",
    badges: ["Needs SEO", "No Online Ordering"],
    strengths: ["Good reputation", "Growing demand", "Repeat clients"],
    weaknesses: ["Weak online presence", "No booking automation"],
    website: "freshbitescatering.com",
  },
];

export const dashboardStats = {
  totalLeads: 1247,
  hotLeads: 89,
  warmLeads: 342,
  outreachSent: 156,
  responseRate: 34,
  avgScore: 72,
};
