export interface SocialUsernames {
  facebook: string
  instagram: string
  linkedIn: string
  github: string
  [key: string]: string
}

export interface PersonalData {
  full_name: string
  first_name: string
  last_name: string
  nickname: string
  post: string
  headings: string[]
  post_description: string
  email: string
  phone: string
  social_usernames: SocialUsernames
  image: string
  location?: string
}

export const personalData: PersonalData = {
  full_name: 'Tanvir Hasan',
  first_name: 'Tanvir',
  last_name: 'Hasan',
  nickname: 'Tanvir',
  post: 'Full Stack Developer',
  headings: ['Full Stack Developer', 'Software Engineer', 'Competitive Programming'],
  post_description:
    'Final-year CSE student at BRAC University, passionate about backend development and competitive programming.',
  email: 'tanvir.dev@gmail.com',
  phone: '+880 15323 51212',
  location: 'Dhaka, Bangladesh',
  social_usernames: {
    facebook: 'tanvir.dev',
    instagram: 'tanvir.dev',
    linkedIn: 'tanvir.dev',
    github: 'tanvir.dev'
  },
  image: '/images/tanvir-pic.webp'
}
