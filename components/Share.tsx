const getSharedLinks = ({
  url = document.URL,
  title = "Gerard Brull Photo",
}) => [
  {
    name: "Facebook",
    url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: "Twitter",
    url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
  },
  {
    name: "Instagram",
    url: `http://www.linkedin.com/shareArticle?url=${url}`,
  },
  {
    name: "WhatsApp",
    url: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
];

export const Share = () => {
  return <div></div>;
};
