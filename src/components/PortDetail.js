import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Badge from './partials/Badge';
import Link from 'next/link';

export default function PortDetail({
  name,
  image,
  tags,
  demo,
  sourceCode,
  description,
}) {
  return (
    <article className='max-w-3xl px-6 py-24 mx-auto space-y-16'>
      <div className='w-full mx-auto space-y-4'>
        <div className='w-full h-60 sm:h-96 shadow-sm relative rounded-sm'>
          <Image
            src={`${image.url}`}
            quality={85}
            layout={'fill'}
            objectFit={'contain'}
            alt={'cover-portfolio'}
            priority
          />
        </div>
        <h1 className='text-4xl font-bold leading-none'>{name}</h1>
        <div className='flex flex-wrap space-x-2 text-xs font-medium'>
          {tags.map((tag, index) => (
            <Badge key={index} title={tag} />
          ))}
        </div>

        <div className='flex flex-wrap space-x-2 text-md text-gray-400'>
          <a
            rel='noopener noreferrer'
            href={`${demo}`}
            target={'_blank'}
            className='p-1 underline hover:text-slate-600'
          >
            Demo
          </a>
          <a
            rel='noopener noreferrer'
            href={`${sourceCode}`}
            target={'_blank'}
            className='p-1 underline hover:text-slate-600'
          >
            Source Code
          </a>
        </div>
      </div>
      <div className='text-slate-200'>
        <RichText
          content={description.raw.children}
          renderers={{
            p: ({ children }) => <p className='mb-2 text-lg'>{children}</p>,
            h1: ({ children }) => <h1 className='text-6xl'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-5xl'>{children}</h2>,
            h3: ({ children }) => <h3 className='text-4xl'>{children}</h3>,
            h4: ({ children }) => <h4 className='text-3xl'>{children}</h4>,
            h5: ({ children }) => <h5 className='text-2xl'>{children}</h5>,
            h6: ({ children }) => <h6 className='text-xl'>{children}</h6>,
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
            ul: ({ children }) => <div className='list-disc'>{children}</div>,
          }}
        />
      </div>
    </article>
  );
}
