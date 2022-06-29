import React, { ReactChildren, ReactChild } from "react";

type PanelProps = {
  title: string;
  children: React.ReactNode;
};

const Panel = ({ title, children }: PanelProps) => {
  return (
    <section className="space-y-6 md:space-y-[83px]">
      <h2>{title}</h2>
      <div className="space-y-8 max-w-[646px] xl:ml-[224px]">{children}</div>
    </section>
  );
};

export default Panel;
