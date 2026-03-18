/* eslint-disable react/prop-types */

export default function CtaButton({ children, href, className }) {
  return (
    <div className={`${className} mt-10 flex flex-col sm:flex-row items-center  gap-6`}>
        <a
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-sky-secondary hover:bg-sky-secondary/90 text-white px-8 py-4 rounded-full font-black uppercase transition-transform hover:scale-105 cursor-pointer"
        >
            {children}
        </a>
    </div>
  );
}