import React from "react";

type Props = {
  title: string;
  content: string;
  comentsQty: number;
  tags: string[];
  category: Category;
};

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  SC = "Styled Components",
}

function Destructuring({ title, content, comentsQty, tags, category }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {comentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Destructuring;
