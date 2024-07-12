
interface Props {
  name ?: string;
  age ?: number;
  email ?:string;
}

export const Person = ({name,age,email}: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
}
