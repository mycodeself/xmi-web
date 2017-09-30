import {rootRef} from './firebase'

const newsRef = rootRef.child('alasvivas/news');

/**
 *
 * @param news
 */
export const pushNews = (news) => {
  return newsRef.push().set({
    title: news.title,
    text: news.text,
    time: Date.now(),
  });
};