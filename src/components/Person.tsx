import { FC, ChangeEvent, useState } from "react";

export enum BoysLuck {
  Tall=" Lucky you",
  Medium = "Nice try",
  Short = "Eeew",

}

interface Props {
  name ?: string;
  age ?: number;
  email ?:string;
  boysLuck:BoysLuck;
}

export const Person:FC<Props> = ({name,age,email,boysLuck}: Props) => {

  const [country, setCountry] =useState<string | null>("")

  type NameType = "Pedro" | "Jack" | "Manuel"
  const nameForType: NameType ="Manuel"

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
      {BoysLuck.Short}
      {boysLuck}
      {nameForType}
    </div>
  );
}
