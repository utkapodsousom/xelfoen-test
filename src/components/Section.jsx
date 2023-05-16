const Section = (props) => {
  return (
    <div className='section'>
      <h2 className='section__title'>{props.title}</h2>
      {props.children && (
        <div className='grid grid--nowrap section__grid'>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Section;
