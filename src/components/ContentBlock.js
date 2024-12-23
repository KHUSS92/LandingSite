const ContentBlock = ({ content }) => {
    if(content.componen === 'text') {
        return <p>{content.text}</p>;
    }

    if(content.component === 'image') {
        return <img src={content.url} alt={content.alt} />;
    }

    return null;
};

export default ContentBlock;