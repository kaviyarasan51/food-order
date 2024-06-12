import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
const AboutUs = () => {
  return (
    <div className='main'>
      <div className='main-cont bg-gray'>
        <UserFunction name='Ganapathy' email='Vengada Ganapathy' id='273159' />
        <UserClass
          name='Ganapathy from class based comp'
          email='Vengada Ganapathy from class based comp'
          id='273159 from class based comp'
        />
      </div>
    </div>
  );
};

export default AboutUs;
