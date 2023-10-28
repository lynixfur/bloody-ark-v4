import { usePathname } from 'next/navigation'; // Import usePathname from next/router
import HomeHeader from './home-header';
import Navbar from './layout/navbar';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps } from 'next';

interface SwitcherProps {
  content: string;
}

export default function PageRender({ content }: SwitcherProps) {
  return (
    <div className="w-full mt-5 md:mt-16 px-5 md:px-10 mb-20">
        <ReactMarkdown className="w-full prose dark:prose-invert max-w-none break-words">{content}</ReactMarkdown>
    </div>
  );
}

