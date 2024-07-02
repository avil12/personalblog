import Post from "./Post";
import "./Posts.css";

const postData = [
  {
    img: "./music.jpg",
    category: "Music",
    title: "The Hidden Gems of World Music",
    desc: "Expand your musical horizons! This post dives into the rich tapestry of world music genres, from the pulsating rhythms of Afrobeat to the haunting melodies of Celtic folk.",
  },
  {
    img: "./life.jpg",
    category: "Life",
    title: "Finding Your Flow",
    desc: "Feeling overwhelmed? This post explores the concept of flow states, that magical zone where productivity feels effortless.",
  },
  {
    img: "./sports.jpg",
    category: "Sport",
    title: "Beyond the Game: The Positive Impact of Sports on Our Lives",
    desc: "Sports are more than just competition. This post explores the positive influence of sports on our physical and mental well-being.",
  },
  {
    img: "./style.jpg",
    category: "Style",
    title: "Capsule Wardrobe Essentials: Building a Stylish and Sustainable Wardrobe",
    desc: "Look good, feel good, and do good for the planet! This post unveils the secrets of creating a capsule wardrobe.",
  },
  {
    img: "./tech.jpg",
    category: "Tech",
    title: "Taming the Tech Storm: Simple Strategies for Digital Detox",
    desc: "Feeling constantly plugged in? This post offers practical strategies for a digital detox.",
  },
  {
    img: "./cinema.jpg",
    category: "Cinema",
    title: "Lights, Camera, Action! Exploring the Power of Film to Transport Us",
    desc: "Delve into the magic of cinema! This post explores the captivating power of film to transport us to different worlds, evoke emotions, and challenge our perspectives.",
  },
];

export default function Posts({ category }) {
  const filteredPosts = category
    ? postData.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    : postData;

  return (
    <div className="posts">
      {filteredPosts.map((post, index) => (
        <Post
          key={index}
          img={post.img}
          category={post.category}
          title={post.title}
          desc={post.desc}
        />
      ))}
    </div>
  );
}
