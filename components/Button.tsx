import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link || ""} passHref>
      <a className="text-cn-blue text-base bg-cn-orange rounded-full py-4 px-8 leading-none inline-block hover:bg-white transition-colors duration-500">
        {text}
      </a>
    </Link>
  );
};

export default Button;
