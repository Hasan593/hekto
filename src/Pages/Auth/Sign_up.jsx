import { TEInput, TERipple } from "tw-elements-react";
import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
// import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Sign_up = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  // const [showPassword, setShowPassword] = useState(false);

  /************************ Sign-Up Function *********************/
  
  /*********************** Singn-In With Facebook Function ************************/
 
    return (
        <>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
          <section className="h-screen">
            <div className="container h-full px-6 py-24">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                {/* <!-- Left column container with background--> */}
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone image"
                  />
                </div>
    
                {/* <!-- Right column container with form --> */}
                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                
                  <div className="text-end">
                    <Link to='/'>
                      <button className="mb-3 rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Home
                      </button>
                    </Link>
                  </div>
    
                  <form >
    
                    {/* <!-- Name input --> */}
                    <TEInput
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text"
                      label="Name"
                      size="lg"
                      className="mb-6 bg-green-500"
                      required
                    ></TEInput>
    
                    {/* <!-- Email input --> */}
                    <TEInput
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      label="Email address"
                      size="lg"
                      className="mb-6 bg-green-500"
                    ></TEInput>
    
                    {/* <!--Password input--> */}
                    <div className="relative mb-6">
                      <TEInput
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        // type={showPassword ? 'text' : 'password'}
                        type="password"
                        label="Password"
                        className="bg-green-500 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
                        size="lg"
                      ></TEInput>
    
                      {/* password show and hide style */}
                      {/* <div
                    className="absolute top-[11px] right-[14px] flex items-center cursor-pointer"
                    onClick={()=>setShowPassword(!showPassword)}>
                      {
                        showPassword ? ( <VscEye size={24} /> ) : ( <VscEyeClosed size={24} /> ) 
                      }
                    </div> */}
                    </div>
    
                    {/* <!--Confirm Password input--> */}
                    <TEInput
                      value={cPassword}
                      onChange={e => setCPassword(e.target.value)}
                      type="password"
                      label="Confirm Password"
                      size="lg"
                      className="mb-6 bg-green-500"
                    ></TEInput>
    
                    {/* Login */}
                    <div className="mb-5">
                      <p>Already have an account? <Link className="font-bold" to='/auth/sign_in' > <a
                        href="#!"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-600 dark:focus:text-primary-600 dark:active:text-primary-600"
                      >
                        Login
                      </a></Link></p>
                    </div>
    
                    {/* <!-- Submit button --> */}
    
                    <TERipple rippleColor="light" className="w-full">
                      <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Sign Up
                      </button>
                    </TERipple>
    
                    {/* <!-- Divider --> */}
                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                      </p>
                    </div>
    
                    {/* <!-- Social login buttons --> */}
                    <TERipple rippleColor="light" className="w-full">
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                      >
                        {/* <!-- Google --> */}
                        <FcGoogle className="mr-2" />
                        Continue with Google
                      </a>
                    </TERipple>
                    <TERipple rippleColor="light" className="w-full">
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                      >
                        {/* <!-- Twitter --> */}
                        <FaGithub className="mr-2 h-3.5 w-3.5" />
                        Continue with Github
                      </a>
                    </TERipple>
                    <TERipple rippleColor="light" className="w-full">
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                      >
                        {/* <!-- Facebook --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        Continue with Facebook
                      </a>
                    </TERipple>
                    
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      );
};

export default Sign_up;