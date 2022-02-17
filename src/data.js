const DATA = [
  {
    imgSrc: './profile1.png', name: 'Krishnaswamy Subramanium', field: 'UX Designer',
    year: '', place: '',
    topAreas:['Software Development Life Cycle (SDLC) ', 'Software dev methodologies', 'Git version control, Github']
  },
  {
    imgSrc: './profile1.png', name: 'Larry David', field: 'Fullstackk Developer',
    year: 'BTech, 4th Year', place: 'Hyderabad',
    topAreas:['Software Development Life Cycle (SDLC) ', 'Software dev methodologies', 'Git version control, Github']
  },
  {
    imgSrc: './profile1.png', name: 'Jo Dsouza', field: 'UX Designer',
    year: 'BTech, 3rd Year', place: 'Mumbai',
    topAreas:['Software Development Life Cycle (SDLC) ', 'Software dev methodologies', 'Git version control, Github', 'DevOps and cloud engineering']
  },
  {
    imgSrc: './profile1.png', name: 'Jo Dsouza', field: 'UX Designer',
    year: 'BTech, 3rd Year', place: 'Mumbai',
    topAreas:['Software Development Life Cycle (SDLC) ']
  },
  {
    imgSrc: './profile1.png', name: 'Jo Dsouza', field: 'UX Designer',
    year: 'BTech, 3rd Year', place: 'Delhi',
    topAreas:[]
  },
]

const CAREER_FILTERS = {
  'Frontend Development': ['Software development life cycle', 'Programming', 'Mobile development',
    'Software dev methodologies', 'Git version control', 'Backend'],
  'UX Designer': ['Wireframing', 'Figma', 'User Research', 'Problem solving']
}

const LOCATION_FILTERS = ['Mumbai', 'Delhi', 'Banglore', 'Hyderabad', 'Gurgaon']

const YEAR_FILTERS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year']

const HEADER_LINKS = [{text: 'assignments', href: '#'}, {text: 'internship', href: '#'}, {text: 'about us', href: '#'}, {text: ' contact us', href: '#'}]

module.exports = { DATA, CAREER_FILTERS, YEAR_FILTERS, LOCATION_FILTERS, HEADER_LINKS }