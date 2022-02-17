const DATA = [
  {
    imgSrc: './profile1.png', name: 'Krishnaswamy Subramanium', field: 'Software Engineer',
    year: '', place: '',
    topAreas:['Software Development Life Cycle (SDLC) ', 'Software dev methodologies', 'Git version control, Github']
  },
  {
    imgSrc: './profile1.png', name: 'Larry David', field: 'Fullstack Developer',
    year: 'BTech, 4th Year', place: 'Hyderabad',
    topAreas:['Software Development Life Cycle (SDLC) ', 'Software dev methodologies', 'Git version control, Github', 'Programming']
  },
  {
    imgSrc: './profile1.png', name: 'Javed Ahemad', field: 'Backend Engineer',
    year: 'BTech, 3rd Year', place: 'Mumbai',
    topAreas:[ 'Software dev methodologies', 'Git version control, Github', 'Backend']
  },
  {
    imgSrc: './profile1.png', name: 'Isha Tyagi', field: 'Data Scientist',
    year: 'BTech, 5rd Year', place: 'Gurgaon',
    topAreas:['Data cleaning and visualisation', 'Data cleaning','Python and R', 'Statistics', ]
  },
  {
    imgSrc: './profile1.png', name: 'Max Black', field: 'UX Designer',
    year: 'BTech, 3rd Year', place: 'Delhi',
    topAreas:[]
  },
  {
    imgSrc: './profile1.png', name: 'Bruce Wayne', field: 'UX Designer',
    year: 'BTech, 3rd Year', place: 'Mumbai',
    topAreas:['Wire Framing', 'User Research', 'Figma']
  },
  
]

const CAREER_FILTERS = {
  'Frontend Development': ['Software development life cycle', 'Programming', 'Mobile development',
    'Software dev methodologies', 'Git version control', 'Backend'],
  'UX Designer': ['Wireframing', 'Figma', 'User Research', 'Problem solving'],
  'Data Science': ['Statistics', 'Data cleaning', 'Visualisation', 'Python', 'SQL']
}

const LOCATION_FILTERS = ['Mumbai', 'Delhi', 'Banglore', 'Hyderabad', 'Gurgaon']

const YEAR_FILTERS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year']

const HEADER_LINKS = [{text: 'assignments', href: '#'}, {text: 'internship', href: '#'}, {text: 'about us', href: '#'}, {text: ' contact us', href: '#'}]

module.exports = { DATA, CAREER_FILTERS, YEAR_FILTERS, LOCATION_FILTERS, HEADER_LINKS }