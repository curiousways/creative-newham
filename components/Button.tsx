import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    (<Link href={link || ""} passHref className="cn-btn">
      {text}
    </Link>)
  );
};

export default Button;
