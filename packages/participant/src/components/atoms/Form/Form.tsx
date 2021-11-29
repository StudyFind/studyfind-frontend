import { memo } from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly onSubmit: React.FormEventHandler<HTMLFormElement>;
  readonly [key: string]: any;
}

export const Form = memo(({ children, onSubmit, ...rest }: Props) => {
  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleEnter} {...rest}>
      {children}
    </form>
  );
});
