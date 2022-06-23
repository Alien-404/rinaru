import ListHelp from '../components/terminal/ListHelp';
import ListSkillTerminal from '../components/terminal/ListSkillTerminal';

export const commands = {
  whoami: 'anonymous-rinaru',
  help: () => {
    return (
      <div>
        <ListHelp command='clear' description='for clear the terminal' />
        <ListHelp command='whoami' description='info current username' />
        <ListHelp
          command='story'
          description='short story about my programming journey'
        />
        <ListHelp command='skills' description='list all my skills' />
        <ListHelp command='exp' description='work experience gained' />
        <ListHelp command='certi_list' description='list all my certificate' />
      </div>
    );
  },
  skills: () => {
    return (
      <div className='container'>
        <ListSkillTerminal title='Language :'>
          <li>JavaScript - [Intermediate]</li>
          <li>PHP - [Intermediate]</li>
        </ListSkillTerminal>
        <ListSkillTerminal title='Framework/Library :'>
          <li>React - [Intermediate]</li>
          <li>NextJS - [Intermediate]</li>
          <li>Codeigniter - [Beginner]</li>
        </ListSkillTerminal>
        <ListSkillTerminal title='Basic Frontend :'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
        </ListSkillTerminal>
      </div>
    );
  },
  story: () => {
    return (
      <p className='text-justify'>
        Hi, I&apos;m <span className='text-yellow-200'>Rico</span>. I am a
        <span className='text-yellow-200'> backend web developer</span>.
        I&apos;ve been in this field since 2018. But I started learning
        programming in 2016. I started this field because I have an interest in
        problem solving and logical thinking, that&apos;s why I really like this
        field. I have studied several programming languages such as javascript,
        java, c++, python, php. but there is one language that I really like,
        namely
        <span className='text-yellow-200'> javascript</span>, I really like this
        language because it is flexible on several platforms and easy to learn.
        I continue to update my skills to this day.
      </p>
    );
  },
  exp: () => {
    return (
      <div className='container'>
        <ListSkillTerminal title='Intern : '>
          <li>[2018 - 2019] Web Gopek as Web Developer </li>
        </ListSkillTerminal>
      </div>
    );
  },
  certi_list: () => {
    return (
      <div className='container'>
        <ListSkillTerminal title='Certificate :'>
          <li>Learn JavaScript Programming Basics - Dicoding</li>
          <li>NodeJS - Progate</li>
          <li>React - Progate</li>
          <li>Python - Progate</li>
        </ListSkillTerminal>
      </div>
    );
  },
};
