type Props = {
  action: () => void;
  title: string;
  classStyle?: string;
};

export const OptionMenu = ({ action, title, classStyle }: Props) => {
  return (
    <button type="button" onClick={action} className={classStyle ? classStyle : ''}>
      {title}
    </button>
  );
};
