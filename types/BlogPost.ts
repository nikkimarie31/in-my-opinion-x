export type BlogPost = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  datePosted: string;
  slug: string;
  images: string[]; 
  tags: string[];
  author: string;
};
