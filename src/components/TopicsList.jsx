import { useEffect, useState } from "react";
import { getTopicsList } from "../../api";
import TopicCard from "./TopicCard";

const TopicsList = () => {
  const [topics, setTopics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopicsList().then((APItopics) => {
      setTopics(APItopics);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else {
  return (
    <div>
         
          <div className="topic-card">
        { topics.map((topic) => {
        return  <TopicCard topic={topic} key={topic.slug}/>
        } ) }
    </div>
    </div>
  );
}
};

export default TopicsList;
