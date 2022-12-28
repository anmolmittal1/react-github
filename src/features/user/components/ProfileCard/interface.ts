export interface ProfileCardProps {
  avatar_url: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
  bio: string | null;
  company: string | null;
  email: string | null;
  location: string | null;
  name: string | null;
}
