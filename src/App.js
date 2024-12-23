import React, { useEffect, useState } from "react";
import { fetchStoryContent } from "./services/api";
import ContentBlock from './components/ContentBlock';

const App = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const slug = 'landing-page';
      const story = await fetchStoryContent(slug);
      setContent(story);
      setLoading(false);
    };

    fetchContent();
  }, []);

  if(loading) {
    return <div>Loading...</div>
  }

  if(!content) {
    return <div>Error loading content.</div>;
  }

  return (
    <div>
      <h1>{content.name}</h1>
      {content.content.body.map((block, index) => (
        <ContentBlock key={index} content={block} />
      ))}
    </div>
  );

};

export default App;