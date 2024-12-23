import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBLOK_API_KEY 
});

export const fetchStoryContent = async(slug) => {
    try{
        const response = await Storyblok.get(`cdn/stories/${slug}`);
        return response.data.story;
    } catch (error) {
        console.error('Storyblok API error, error');
        return null;
    }
};
