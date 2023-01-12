import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link || ""} passHref>
      <a className="text-cn-blue--contrast text-base bg-cn-orange rounded-full py-4 px-8 flex justify-center hover:bg-white hover:text-cn-blue transition-colors duration-500 no-underline">
        {text}
      </a>
    </Link>
  );
};

export default Button;
