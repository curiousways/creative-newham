import React from 'react';

interface ImageLinkProps {
  link: string;
  image: string;
  alt: string;
  imgClassName?: string;
  wrapperClassName?: string;
}

const ImageLink: React.FC<ImageLinkProps> = (props) => {

  const imgClass = props.imgClassName ? props.imgClassName : "h-auto w-full";

  const wrapperClass = ["relative", "flex", "items-center", "justify-center", "space-x-3", "rounded-lg", "border-2", "border-cn-blue", "bg-white", "bg-opacity-90", "p-10", "shadow-sm", "focus-within:ring-2", "focus-within:ring-cn-orange", "focus-within:ring-offset-2", "hover:border-cn-orange", "hover:border-2"].concat(props.wrapperClassName ? props.wrapperClassName.split(' ') : []).join(' ');  

  return (
    <div className={wrapperClass}>
      <a target="_blank" rel="noreferrer" href={props.link}>
        <img className={imgClass} src={props.image} alt={props.alt} />
      </a>
    </div>
  );
}

export default ImageLink;