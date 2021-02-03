import React from 'react'

const Input = ({validMessage, id, label, placeholder, inputType, icon, textarea}) => {
    if(textarea) {
        return (
                <div className="flex flex-col mb-4">
                    <label htmlFor={id} className="font-inter mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                        {label}
                    </label>

                    <div className="relative">

                        <textarea name={id} id={id} cols="30" rows="10" placeholder={placeholder} required
                            className={validMessage === true
                                ?
                                    "h-40 font-inter text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
                                :
                                    "h-40 font-inter text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                            }    
                        ></textarea> 

                    </div>

                            <span className="opacity-0 font-inter flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                Invalid username field !
                            </span>
                     
                    
                </div>
        )
    } else {
        return (
                    <div className="flex flex-col mb-4">
                        <label htmlFor={id} className="font-inter mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                            {label}
                        </label>

                        <div className="relative">

                            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                    {icon}
                                </div>
                            </div>

                            <input id={id}
                                name={id}
                                type={inputType}
                                placeholder={placeholder}
                                required
                                className={validMessage === true
                                    ?
                                        "font-inter text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
                                    :
                                        "font-inter text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                }
                            />

                        </div>

                            <span className="opacity-0 font-inter flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                Invalid username field !
                            </span>
                        
                    </div>
        )
    }
}

export default Input
