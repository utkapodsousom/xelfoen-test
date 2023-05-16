import headphones from "../db";

const Content = ({ title }) => {
  return (
    <section className="content">
      <h2 className="content__title">{title}</h2>
      {headphones.map((item, i) => {
        return <h1 key={i}>{item.title}</h1>;
      })}
    </section>
  );
};

export default Content;
