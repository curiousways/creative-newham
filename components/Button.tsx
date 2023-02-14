import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link || ""} passHref>
      <a className="cn-btn">
        {text}
      </a>
    </Link>
  );
};

export default Button;
