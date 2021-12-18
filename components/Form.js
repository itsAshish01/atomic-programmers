const Form = () => {
  return (
    <div className='md:px-20'>
      <form action='#' method='POST'>
        <div className='overflow-hidden sm:rounded-md'>
          <div className='px-4 py-5 sm:p-6 xl:px-10 lg:py-10'>
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 lg:col-span-2 lg:col-start-2'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-semibold text-slate-700'
                >
                  First name
                </label>
                <input
                  required
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='mt-1 focus:ring-slate-500 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-slate-400 rounded-md'
                />
              </div>

              <div className='col-span-6 lg:col-span-2 lg:col-start-4'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-semibold text-slate-700'
                >
                  Last name
                </label>
                <input
                  type='text'
                  required
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='mt-1 focus:ring-slate-500 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-slate-400 rounded-md'
                />
              </div>

              <div className='col-span-6 lg:col-span-2 lg:col-start-2'>
                <label
                  htmlFor='email-address'
                  className='block text-sm font-semibold text-slate-700'
                >
                  Email address
                </label>
                <input
                  required
                  type='email'
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  className='mt-1 focus:ring-slate-500 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-slate-400 rounded-md'
                />
              </div>

              <div className='col-span-6 lg:col-span-2'>
                <label
                  htmlFor='country'
                  className='block text-sm font-semibold text-slate-700'
                >
                  About
                </label>
                <select
                  required
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='mt-1 block w-full py-2 px-3 border border-slate-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-700 sm:text-sm'
                >
                  <option>Development</option>
                  <option>Design</option>
                </select>
              </div>

              <div className='col-span-6 lg:col-span-4 lg:col-start-2'>
                <label
                  htmlFor='about'
                  className='block text-sm font-semibold text-slate-700'
                >
                  Message
                </label>
                <div className='mt-1'>
                  <textarea
                    required
                    id='about'
                    name='about'
                    rows={3}
                    className='shadow-sm focus:ring-slate-500 focus:border-slate-700 mt-1 block w-full sm:text-sm border border-slate-400 rounded-md xl:h-28'
                    placeholder='Write your message here...'
                    defaultValue={''}
                  />
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  You can write about your project. You can also give us
                  feedback on how we can improve.
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 py-3 text-center sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
