import React, {useState} from 'react'
import { DATA, CAREER_FILTERS, YEAR_FILTERS, LOCATION_FILTERS, HEADER_LINKS } from './data'
import Header from './Header';
import Profile from './Profile';
import Filter from './Filter';
import FilterTag from './FilterTag';
import './App.css';

function App() {

  const [expandedFilter, setExpandedFilter] = useState('')

  const [careerFilter, setCareerFilter] = useState({option:'', subOption:[]})

  const [yearFilter, setYearFilter] = useState([])

  const [locationFilter, setLocationFilter] = useState([])

  const onRemove = (item) => {
    if (careerFilter.subOption.includes(item)) 
      setCareerFilter((prevState) => ({
        ...prevState,
        subOption: prevState.subOption.filter((filter) => filter != item)
      }))
    else if (yearFilter.includes(item))
      setYearFilter((prevState) => prevState.filter((filter) => filter != item))
    else
      setLocationFilter((prevState) => prevState.filter((filter) => filter != item))
  }

  const filterProfiles = (profiles, filters) => {
    if (filters.year.length || filters.place.length || filters.career.length) {

      const filteredProfiles = profiles.filter((profile) => {
        const topAreas = profile.topAreas.join(' ')
        const year = profile.year
        const place = profile.place
        let flag1 = false, flag2 = false, flag3 = false;
        for (let p of filters.place)
          if (p.toLowerCase() == place.toLowerCase()) {
            flag3 = true
            break
          }
        for (let y of filters.year)          
          if (year.toLowerCase().includes(y.toLowerCase())) {
            flag3 = true
            break
          }
        for (let a of filters.career)
          if (topAreas.toLowerCase().includes(a.toLowerCase())) {
            flag3 = true
            break
          }
        return flag1 && flag2 && flag3
      })
      console.log(filteredProfiles)
      return filteredProfiles
    }
    else return profiles
  }

  return (
    <div className="app">      
      <Header links={HEADER_LINKS} />

      <div className='main'>
        <h1>Recruitment Dashboard</h1>

        <div className='filters-container'>
          <Filter
            onToggleFilter={()=>setExpandedFilter(prevState=>prevState=='career' ? '' : 'career')}
            onFilterChange={setCareerFilter}
            open={expandedFilter=='career'}
            labelText='Select Career'
            options={CAREER_FILTERS}
            checked={careerFilter}
            nested
          />
          <Filter
            onToggleFilter={()=>setExpandedFilter(prevState=>prevState=='year' ? '' : 'year')}
            onFilterChange={setYearFilter}
            open={expandedFilter=='year'}
            labelText='College Year'
            options={YEAR_FILTERS}
            checked={yearFilter}
          />

          <Filter
            onToggleFilter={()=>setExpandedFilter(prevState=>prevState=='location' ? '' : 'location')}
            onFilterChange={setLocationFilter}
            open={expandedFilter=='location'}
            labelText='Location'
            options={LOCATION_FILTERS}
            checked={locationFilter}
            multiselect
          />
        </div>

        <div className='filtertag-container'>
          {
            careerFilter.option && careerFilter.subOption.map((filter) => <FilterTag text={filter} onRemove={onRemove}/> )
          }
          {
            yearFilter && yearFilter.map((filter)=> <FilterTag text={filter}  onRemove={onRemove}/>)
          }
          {
            locationFilter && locationFilter.map((filter)=> <FilterTag text={filter}  onRemove={onRemove}/>)
          }
        </div>

        <div className='profiles-container'>
          {filterProfiles(DATA, { career: careerFilter.subOption, year: yearFilter, place: locationFilter }).
            map(profileDetails => <Profile 
            {...profileDetails}
          />)}
        </div>
      </div>
      
    </div>
  );
}

export default App;
