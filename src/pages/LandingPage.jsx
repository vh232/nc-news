import {Link} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div>
            <h1>coming soon!</h1>
            <Link to="/articles"><button className="landing-page">View All Articles</button></Link>
        </div>
        
    )
}

export default LandingPage;