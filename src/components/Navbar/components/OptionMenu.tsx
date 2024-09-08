type Props = {
  action: () => void;
  title: string;
};

export const OptionMenu = ({ action, title }: Props) => {
  return (
    <button type="button" onClick={action}>
      {title}
    </button>
  );
};
