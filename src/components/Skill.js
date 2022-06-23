import ItemSkill from './partials/ItemSkill';

export default function Skill({ skills }) {
  return (
    <section className='text-gray-100 py-4'>
      <div className='container max-w-3xl px-4 py-12 mx-auto bg-slate-800 rounded'>
        <div className='grid gap-4 mx-4 sm:grid-cols-12'>
          <div className='col-span-12 sm:col-span-3'>
            <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-yellow-200'>
              <h3 className='text-3xl font-semibold'>Skills</h3>
              <span className='text-sm font-bold tracking-wider uppercase text-gray-400'>
                Skill Learned
              </span>
            </div>
          </div>
          <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
            <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700'>
              {skills &&
                skills.map((skillItem) => {
                  const { id, skill, dateLearned, skillDescription } =
                    skillItem;
                  return (
                    <ItemSkill
                      key={id}
                      skill={skill}
                      date={dateLearned}
                      description={skillDescription}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
