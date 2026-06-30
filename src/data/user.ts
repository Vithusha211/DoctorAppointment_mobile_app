export type User = {
  id: string;
  fullName: string;
  phone: string;
  avatar: string;
};

export const CURRENT_USER: User = {
  id: 'user-1',
  fullName: 'Daniel Martinez',
  phone: '+123 856479683',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
};
