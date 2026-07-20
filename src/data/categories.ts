export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: 'home-kitchen',
    name: 'Home & Kitchen',
    description: 'Appliances, cookware, and gadgets that make everyday home life easier.',
    icon: '🏠',
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    description: 'Gadgets, audio gear, and smart devices tested for real-world use.',
    icon: '🔌',
  },
  {
    slug: 'fitness-outdoor',
    name: 'Fitness & Outdoor',
    description: 'Gear for workouts, sports, camping, and getting outside.',
    icon: '🏃',
  },
  {
    slug: 'tools-diy',
    name: 'Tools & DIY',
    description: 'Power tools, hand tools, and equipment for home projects.',
    icon: '🛠️',
  },
  {
    slug: 'baby-kids',
    name: 'Baby & Kids',
    description: 'Gear, safety products, and essentials for parents and children.',
    icon: '🍼',
  },
  {
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Skincare tools, grooming devices, and personal care products.',
    icon: '💄',
  },
  {
    slug: 'health-supplements',
    name: 'Health & Supplements',
    description: 'Vitamins, supplements, and nutrition products for everyday health.',
    icon: '💊',
  },
  {
    slug: 'fashion-accessories',
    name: 'Fashion & Accessories',
    description: 'Bags, wallets, jewelry, and everyday carry accessories.',
    icon: '👜',
  },
];

export function getCategory(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
