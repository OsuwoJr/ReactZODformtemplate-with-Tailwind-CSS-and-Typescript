import { FC, useState } from "react";
interface Props {
  name ?: string;
  age ?: number;
  email ?:string;
}

export const Person:FC<Props> = ({name,age,email}: Props) => {

  const [country, setCountry] =useState<string | null>("")
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
}
