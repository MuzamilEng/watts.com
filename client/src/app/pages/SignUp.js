import React from 'react'
import {register } from '../Data'
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../store/storeApi';

const SignUp = () => {
    const [addUser] = useAddUserMutation();
    // const [user, setUser] = React.useState({
    //   username: "",
    //     email: '',
    //     password: '',
    // })
    const navigate = useNavigate()
    const { handleSubmit, setValue, control, formState: {errors} } = useForm({
        defaultValues: {
          email:'',
          password: '',
        },
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value, "value")
        setValue(name, value);
      };
      const showToast = (message, type) => {
        toast[type](message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      };
    
      const onSubmit = (data, e) => {
        e.preventDefault();
          addUser(data);
          showToast('User added successfully', 'success');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
      };
  return (
    <div>
    <main className='w-screen h-full bg-slate-400'>
      <ToastContainer />
        <img src="images/main_bg.png" alt="" className='w-full h-full' />
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center p-2 bg-[#fff] rounded-md">
            {register?.map((item, index) => (
                <div key={index} className='p-3'>
                    <h1 className='text-4xl font-semibold text-center'>{item?.title}</h1>
                    {item?.form?.map((form, index) => (
                        <div key={index} className='w-full max-w-[35rem]'>
                            <label className='text-xl font-semibold text-black ml-3'>{form?.label}</label> <br />
                            <Controller 
                                name={form?.name}
                                control={control}
                                rules={form?.rules}
                                render={({ field }) => (
                                    <input
                                    onChange={handleInputChange}
                                    {...field} value={field?.value}
                                    type={form?.type} placeholder={form?.placeholder}
                                 className="w-[32rem] p-2 m-4 focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md"
                                 />
                                 )}
                                />
                                 <br />
                                 {errors[form?.name] && <p className='text-red-500'>{errors[form?.name]?.message}</p>}
                        </div>
                    ))}
                    <div className="flex justify-center items-center">
                    <button type="submit" className='bg-blue-500 text-white p-2 m-4 w-full max-w-[12rem] hover:bg-blue-400 rounded-md'>Submit</button>
                    </div>
                </div>
            ))}
        </form>
    </main>
</div>
  )
}

export default SignUp