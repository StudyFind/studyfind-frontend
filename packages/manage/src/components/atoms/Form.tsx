import { memo } from "react";

type Props = {
  readonly children: React.ReactNode;
  readonly onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const Form = memo(({ children, onSubmit }: Props) => {
  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return <form onSubmit={handleEnter}>{children}</form>;
});

export default Form;
