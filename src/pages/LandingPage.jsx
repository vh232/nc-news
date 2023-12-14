import {Link} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className="landing-page-grid">
            <section className="right-hand-column">
            <h1 id="NC-News-landing">NC <br></br> News</h1>
            <p id="landing-text">A Reddit-style social news aggregator app created by Vicky Hill. </p>
            </section>
            <section className="left-hand-column">
            <button className="landing-page-button" onClick={() => {location.href="/articles"}}>View All Articles</button>
            <button onClick={() => {location.href="/topics"}}className="landing-page-button">View All Topics</button>
            <button className="landing-page-button" onClick={() => {location.href="/articles/post_new_article"}}>Post a New Article</button>
            <button className="landing-page-button" onClick={() => {location.href="/user_profile"}}>View Your Profile</button>
            </section>  
        </div>
        
    )
}

export default LandingPage;