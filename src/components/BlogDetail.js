import moment from 'moment';
import Image from 'next/image';
import Badge from './partials/Badge';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function BlogDetail({ title, image, date, content, tags }) {
  return (
    <div className='p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100'>
      <div className='flex flex-col max-w-3xl mx-auto overflow-hidden rounded'>
        <div className='w-full h-60 sm:h-96 relative'>
          <Image
            src={`${image.url}`}
            layout={'fill'}
            objectFit={'contain'}
            alt={'post-cover'}
            priority
            quality={95}
          />
        </div>
        <div className='p-6 pb-12 m-4 mx-auto -mt-4 md:mt-4 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900'>
          <div className='space-y-2'>
            <p className='inline-block text-2xl font-semibold sm:text-3xl font-publicsans'>
              {title}
            </p>
            <p className='text-xs text-gray-400 font-publicsans'>
              {moment(date).format('dddd, MMMM Do YYYY')}
            </p>
            <div className='my-2 flex flex-row flex-wrap gap-2 font-nunito'>
              {tags.map((tag, index) => (
                <Badge key={index} title={tag} />
              ))}
            </div>
          </div>
          <div className='text-gray-400 font-publicsans'>
            <RichText
              content={content.raw.children}
              renderers={{
                p: ({ children }) => (
                  <p className='mb-2 text-base font-nunito'>{children}</p>
                ),
                h1: ({ children }) => (
                  <h1 className='text-6xl my-2'>{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className='text-5xl my-2'>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className='text-4xl my-2'>{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className='text-3xl my-2'>{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className='text-2xl my-2'>{children}</h5>
                ),
                h6: ({ children }) => (
                  <h6 className='text-xl my-2'>{children}</h6>
                ),
                a: ({ children, openInNewTab, href, ...rest }) => {
                  if (href.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        href={href}
                        target={openInNewTab ? '_blank' : '_self'}
                        rel={'noopener noreferrer'}
                        {...rest}
                        className='hover:text-slate-500'
                      >
                        {children}
                      </a>
                    );
                  }

                  return (
                    <Link href={href}>
                      <a {...rest}>{children}</a>
                    </Link>
                  );
                }, // end element a
                blockquote: ({ children }) => {
                  return (
                    <div className='max-w-4xl p-4 text-slate-100 bg-slate-600 rounded-lg shadow'>
                      <div className='mb-2'>
                        <div className='h-3 text-3xl text-left'>“</div>
                        <p className='px-4 text-sm text-center'>{children}</p>
                        <div className='h-3 text-3xl text-right'>”</div>
                      </div>
                    </div>
                  );
                },
                ol: ({ children }) => (
                  <div className='list-decimal'>{children}</div>
                ),
                ul: ({ children }) => (
                  <div className='list-disc'>{children}</div>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
