export type Post = {
  key: string;
  link: string;
  title: string;
  createdAt: string;
  tags: string[];
  slug?: string;
};

export type ZennPost = {
  [key: string]: any;
};

export type BlogPost = {
  __typename: string;
  createdAt: string;
  title: string;
  slug: string;
  id: string;
  content: string;
};

export type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
};
