import { useState } from 'react';
import type { FC } from 'react';

interface ButtonProps {
  onClick: (v: number) => void;
  index: number;
}

/* Дочерний компонент */
const Button: FC<ButtonProps> = ({ onClick, index }) => {
  console.log(`Button ${index} rerender`);

  return <button onClick={() => onClick(index)}>+ {index}</button>;
};

/* Родительский компонент */
const Task_2: FC = () => {
  const [count, setCount] = useState(0);

  console.log('Parent rerender');

  const onClick = (num: number) => {
    setCount(count + num);
  };

  return (
    <section>
      <h2>
        При изменении стейта count в компоненте App дочерние компоненты Button не должны
        ререндериться
      </h2>
      <div className="container">
        <h1>Count: {count}</h1>
        <div className="buttons">
          {new Array(5).fill(null).map((_, i) => (
            <Button
              onClick={onClick}
              index={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Task_2;
