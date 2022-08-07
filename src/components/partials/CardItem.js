import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

export default function CardItem({ name, slug, image, tags, description }) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <a className='hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out'>
        <article className='flex flex-col bg-gray-900 rounded-sm shadow-xl'>
          <div className='w-full h-52 bg-gray-500 relative'>
            <Image
              src={`${image.url}`}
              quality={95}
              objectFit={'cover'}
              layout={'fill'}
              priority
              alt={`cover-portfolio`}
            />
          </div>
          <div className='flex flex-col flex-1 p-6'>
            <div className='flex flex-row flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <span
                  className='text-xs tracking-wider uppercase hover:underline font-medium text-gray-900 bg-yellow-200 p-1'
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className='flex-1 py-2 text-lg font-semibold leading-snug font-publicsans'>
              {name}
            </h3>
            <p className='flex-1 text-sm truncate font-nunito font-light'>
              <RichText content={description.raw.children[0]} renderers={{}} />
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
}
