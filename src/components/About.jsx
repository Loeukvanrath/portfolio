import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            My name is Vanrath. Currently, I'm 23 years old and
            currently completing my final semester (Year 4, Semester 2)
            at University of Puthisastra (UP). I have studied some
            programming language such as Python, C, C++, Html, CSS,
            JS, PHP ,etc. And I am passionate in technology and willing
            to learn and new experience.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
