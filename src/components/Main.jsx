import headphones from '../db';
import Section from './Section';
import Card from './Card';

const Main = (props) => {
  const wired = headphones.filter((item) => !item.wireless);
  const wireless = headphones.filter((item) => item.wireless);
  const addToCart = props.addToCart;

  return (
    <>
      <Section title='Наушники'>
        {wired.map((item) => {
          return <Card key={item.id} className='grid__product card' data={item} handleClick={() => addToCart(item)} />;
        })}
      </Section>
      <Section title='Беспроводные наушники'>
        {wireless.map((item) => {
          return <Card key={item.id} className='grid__product card' data={item} handleClick={() => addToCart(item)} />;
        })}
      </Section>
    </>
  );
};

export default Main;
