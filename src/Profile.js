import './Profile.css'

const Profile = (props) => {
    const { imgSrc, name, field, year, place, topAreas=[] } = props;

    return <div className='profile'>
        
        <div className='profile-top'>
            <img src={imgSrc} alt='profile' />
            <div className='details'>
                {name && <div className='name'>{name}</div>}
                {field && <div className='field'>{field}</div>}
                {year && <div className='year'>{year}</div>}
                {place && <div className='place'>{place}</div>}
            </div>
        </div>

        <hr />

        <div className='profile-bottom'>
            <div className='top-area-title'>Top areas</div>
            {
                topAreas.length ? <div className='top-areas-container'>
                    {topAreas.slice(0, 3).map((area) =>
                        <div className='top-area'>{area}</div>
                    )}
                    {
                        topAreas.length>3 && <span className='more-tag'>& x more</span>
                    }
                </div> : '-'
            }
        </div>

    </div>

}

export default Profile