import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function BlogItem({ title, image, tags, content, slug }) {
  return (
    <div className='max-w-2xl mx-auto overflow-hidden rounded-lg shadow-2xl bg-gray-800'>
      <div className='w-full h-48 md:h-96 relative'>
        <Image
          src={`${image.url}`}
          objectFit={'cover'}
          layout={'fill'}
          alt={'cover-blogs'}
          quality={95}
          priority
        />
      </div>
      <div className='p-6'>
        <div>
          <div className='flex flex-row flex-wrap gap-2 font-nunito'>
            {tags.map((tag, index) => (
              <Badge key={index} title={tag} />
            ))}
          </div>
          <p className='block mt-2 text-2xl font-semibold  transition-colors duration-200 transform text-white hover:text-yellow-200 hover:underline cursor-pointer font-publicsans'>
            {title}
          </p>
          <p className='mt-2 text-sm text-slate-300 font-nunito'>
            <RichText content={content.raw.children[(0, 1)]} />
          </p>
          <div className='space-y-2 text-center mt-14'>
            <Link href={`/blog/${slug}`}>
              <a className='inline-block px-12 py-3 text-sm font-semibold border border-yellow-200 rounded hover:bg-yellow-200 hover:text-gray-800 active:bg-yellow-100 focus:outline-none focus:ring font-publicsans'>
                Read more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
