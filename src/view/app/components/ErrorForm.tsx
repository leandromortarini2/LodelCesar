interface Props {
  message: string;
}

export default function ErrorForm({ message }: Props) {
  return <span className="text-red-500 text-xs my-2">{message}</span>;
}
