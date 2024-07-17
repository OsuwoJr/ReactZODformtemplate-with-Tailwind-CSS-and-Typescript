import {z,ZodType} from 'zod';
import {useForm}from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
type FormData = {
  firstName:string;
  lastName:string;
  email:string;
  age:number;
  password:string;
  confirmPassword:string;
}

function App() {
  const schema: ZodType<FormData> = z.object({
    firstName:z.string().min(2).max(30),
    lastName:z.string().min(2).max(30),
    email: z.string().email(),
    age:z.number().min(18).max(70),
    password:z.string().min(5).max(20),
    confirmPassword:z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message:"Passwords do not match",
    path:["confirmPassword"],
  });
  const {
    register, 
    handleSubmit,
    formState:{errors},
  } = useForm<FormData>({resolver:zodResolver(schema)})

  const submitData = (data:FormData) => {
    console.log("IT WORKED", data)
  }

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col w-[200px] min-h-screen" onSubmit={handleSubmit(submitData)}>
        <label>
          First Name:
        </label>
        <input type="text" placeholder="first name" {...register("firstName")}/>
        {errors.firstName && <span className='text-red-600'>{errors.firstName.message}</span>}
        <label>
          Last Name:
        </label>
        <input type="text" placeholder="Last name" {...register("lastName")}/>
        {errors.lastName && <span className='text-red-600'>{errors.lastName.message}</span>}
        <label>
          Email:
        </label>
        <input type="email" placeholder="email" {...register("email")}/>
        {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        <label>
          Age
        </label>
        <input type="number" placeholder="age" {...register("age", {valueAsNumber: true})}/>
        {errors.age && <span className='text-red-600'>{errors.age.message}</span>}
        <label>
          Password
        </label>
        <input type="password" placeholder="Password" {...register("password")}/>
        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
        <label>
          Confirm Password
        </label>
        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
        {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword.message}</span>}

        <input type='submit'/>
      </form>
      
    </div>
  );
}

export default App