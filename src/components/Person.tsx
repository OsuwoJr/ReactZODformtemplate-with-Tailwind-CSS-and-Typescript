import { FC, ChangeEvent, useState } from "react";
interface Props {
  name ?: string;
  age ?: number;
  email ?:string;
}

enum BoysLuck {
  Tall=" Lucky you",
  Medium = "Nice try",
  Short = "Eeew",

}
export const Person:FC<Props> = ({name,age,email}: Props) => {

  const [country, setCountry] =useState<string | null>("")

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country..." onChange={handleChange}/>
      {country}
      {BoysLuck.Tall}
    </div>
  );
}
