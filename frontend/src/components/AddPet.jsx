import { useState, useRef } from 'react';
import Sidebar3 from "./Sidebar3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AddPet() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const PetType = [
        {
            id: 1,
            title: 'Dog',
            imgurl: 'src/assets/dogsvg.svg',
        },
        {
            id: 2,
            title: 'Cat',
            imgurl: 'src/assets/catsvg.svg',
        },
        {
            id: 3,
            title: 'Rabbit',
            imgurl: 'src/assets/rabbitsvg.svg',
        },
        {
            id: 4,
            title: 'Rodents',
            imgurl: 'src/assets/rodentsvg.svg',
        },
    ];
    const Purpose = [
        {
            id: 1,
            title: 'Pet House',
            imgurl: 'src/assets/pethousesvg.svg',
        },
        {
            id: 2,
            title: 'Vet Clinic',
            imgurl: 'src/assets/vetsvg.svg',
        },
    ];
    const Gender = [
        {
            id: 1,
            title: "male",
            imgurl: 'src/assets/female-svgrepo-com.svg',
        },
        {
            id: 2,
            title: "female",
            imgurl: 'src/assets/male-svgrepo-com.svg',
        },
    ];

    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedPurpose, setSelectedPurpose] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);

    const handlePetClick = (id) => {
        console.log('Pet clicked:', id);
        setSelectedPet(id);
    };

    const handlePurposeClick = (id) => {
        console.log('Purpose clicked:', id);
        setSelectedPurpose(id);
    };
    const handleGenderClick = (id) => {
        console.log('Gender clicked:', id);
        setSelectedGender(id);
    };

    const handleNextClick = () => {
        if (currentIndex === 4) {
            window.location.href = '/profile';
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    

    return (
        <>
            <Sidebar3 />
            {currentIndex === 0 && (
                <div className="flex justify-center items-start pt-8">
                    <div className="w-full max-w-md">
                        <div className="px-4 py-4">
                            {/* Step bars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-2 ${currentIndex > index ? 'bg-green-800' : 'bg-gray-200'} rounded-full mx-1`}
                                    ></div>
                                ))}
                            </div>
                            <div className="text-center text-2xl text-black font-bold">
                                What type of pet do you have?
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-wrap justify-center gap-4'>
                                    {PetType.map((pet) => (
                                        <div
                                            key={pet.id}
                                            className={`flex flex-col items-center justify-center text-gray-700 shadow-md bg-clip-border rounded-lg w-32 h-32 m-5 p-5 cursor-pointer bg-${selectedPet === pet.id ? 'gray-500' : 'white'}`}
                                            onClick={() => handlePetClick(pet.id)}
                                        >
                                            <img src={pet.imgurl} alt={pet.title} className='w-20 h-20 mb-2' />
                                            <div>{pet.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='text-center text-2xl text-black font-bold'>Looking For?</div>
                                {/* Cards for purposes */}
                                <div className='flex flex-row justify-center gap-4'>
                                    {Purpose.map((aim) => (
                                        <div
                                            key={aim.id}
                                            className={`flex flex-col items-center justify-center text-gray-700 bg-white shadow-md bg-clip-border rounded-lg w-32 h-32 m-5 p-5 cursor-pointer bg-${selectedPurpose === aim.id ? 'gray-500' : 'white'}`}
                                            onClick={() => handlePurposeClick(aim.id)}
                                        >
                                            <img src={aim.imgurl} alt={aim.title} className='w-20 h-20 mb-2' />
                                            <div>{aim.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {currentIndex === 1 && (
                <div className="flex justify-center items-start pt-8">
                    <div className="w-full max-w-md">
                        <div className="px-4 py-4">
                            {/* Step bars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-2 ${currentIndex > index ? 'bg-green-800' : 'bg-gray-200'} rounded-full mx-1`}
                                    ></div>
                                ))}
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-center text-2xl text-black font-bold mb-4'>
                                    What's your pet's name?
                                </div>
                                <input
                                    type="text"
                                    className={`border-2 border-gray-400 rounded-lg px-8 py-2 w-50 h-10 mx-5 my-5`}
                                    placeholder="Enter your pet's name"
                                />
                            </div>
                            <div className='text-center text-2xl text-black font-bold mb-4'>
                                Select Gender
                            </div>
                            <div className="flex justify-between mt-4">

                                <div className='flex flex-row justify-center gap-4'>
                                    {Gender.map((aim) => (
                                        <div
                                            key={aim.id}
                                            className={`flex flex-col items-center justify-center text-gray-700 shadow-md bg-clip-border rounded-lg w-32 h-32 m-5 p-5 cursor-pointer ${selectedGender === aim.id ? 'bg-gray-500' : 'bg-white'}`}
                                            onClick={() => handleGenderClick(aim.id)}
                                        >
                                            <img src={aim.imgurl} alt={aim.title} className='w-20 h-20 mb-2' />
                                            <div className={selectedGender === aim.id ? 'text-white' : ''}>{aim.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}


            {currentIndex === 2 && (
                <div className="flex justify-center items-start pt-8">
                    <div className="w-full max-w-md">
                        <div className="px-4 py-4">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-2 ${currentIndex > index ? 'bg-green-800' : 'bg-gray-200'} rounded-full mx-1`}
                                    ></div>
                                ))}
                            </div>
                            <div className='text-center text-2xl text-black font-bold mb-4'>
                                What's your pet's breed?
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="form-radio h-6 w-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="default-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900"
                                >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="form-radio h-6 w-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900"
                                >
                                    Checked state
                                </label>
                            </div>
                            <div className="flex flex-col ">
                                <div className='text-center text-2xl text-black font-bold mb-4'>
                                    Select specific breed
                                </div>
                                <select
                                    placeholder="Enter your pet's breed"
                                    className="ml-2 border-2 border-gray-400 rounded-lg px-4 py-2"
                                >
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className='flex flex-row mt-4'>
                                <div className='text-center text-2xl text-black font-bold'>
                                    Certified breed?
                                </div>
                                <div className="flex items-center ml-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                </div>
                                <div className="flex items-center ml-4">
                                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {currentIndex === 3 && (
                <div className="flex justify-center items-start pt-8">
                    <div className="w-full max-w-md">
                        <div className="px-4 py-4">
                            {/* Step bars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-2 ${currentIndex > index ? 'bg-green-800' : 'bg-gray-200'} rounded-full mx-1`}
                                    ></div>
                                ))}
                            </div>
                            <div className='text-center text-2xl text-black font-bold'>
                                How big is your pet?
                            </div>
                            <div className='flex flex-row mt-4'>

                                <div className="flex items-center ml-4">
                                    <input id="size-small" type="radio" value="Small" name="pet-size" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="size-small" className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Small</label>
                                </div>
                                {/* Add other size options similarly */}
                            </div>
                            <div className='text-center text-2xl text-black font-bold mt-6'>
                                How old is your pet?
                            </div>
                            <div className="flex flex-row flex-wrap justify-center   mt-4">
                                <div className="flex flex-col items-center">
                                    <label htmlFor="pet-age-years" className="text-md font-medium text-gray-900 dark:text-gray-300"></label>
                                    <input
                                        id="pet-age-years"
                                        type="number"
                                        min="0"
                                        className="border-2 border-gray-400 rounded-lg px-4 py-2 w-20 h-10 mx-1 my-2"
                                        placeholder="Years"
                                    />
                                </div>
                                <div className="flex flex-col items-center">
                                    <label htmlFor="pet-age-months" className="text-md font-medium text-gray-900 dark:text-gray-300"></label>
                                    <input
                                        id="pet-age-months"
                                        type="number"
                                        min="0"
                                        max="11"
                                        className="border-2 border-gray-400 rounded-lg px-4 py-2 w-20 h-10 mx-1 my-2"
                                        placeholder="Months"
                                    />
                                </div>
                            </div>
                            <div className='text-center text-2xl text-black font-bold mt-6'>
                                Your pet's weight
                            </div>
                            <div className="flex flex-row flex-wrap justify-center   mt-4">
                                <div className="flex flex-col items-center">
                                    <label htmlFor="pet-age-years" className="text-md font-medium text-gray-900 dark:text-gray-300"></label>
                                    <input
                                        id="pet-weight"
                                        type="number"
                                        min="0"
                                        className="border-2 border-gray-400 rounded-lg px-4 py-2 w-20 h-10 mx-1 my-2"
                                        placeholder="Kgs"
                                    />
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            )}

            
            {currentIndex === 4 && (
                <div className="flex justify-center items-start pt-8">
                    <div className="w-full max-w-md">
                        <div className="px-4 py-4">
                            {/* Step bars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-2 ${currentIndex > index ? 'bg-green-800' : 'bg-gray-200'} rounded-full mx-1`}
                                    ></div>
                                ))}
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-center text-2xl text-black font-bold mb-4'>
                                    Willingness to travel?
                                </div>
                                <input
                                    type="text"
                                    className={`border-2 border-gray-400 rounded-lg px-8 py-2 w-50 h-10 mx-5 my-5`}
                                    placeholder="Enter your pet's name"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleNextClick}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </>
    );
}