import { useEffect, useState } from 'react'
import { image1, image2, image3 } from '../../assets'
import { motion } from 'framer-motion'
import Indicator from './Indicator'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageOneHidden, setPageOneHidden] = useState(false)
    const [pageTwoHidden, setPageTwoHidden] = useState(false)

    const handleClickNext = () => {
        setCurrentPage(2)
        setTimeout(() => {
            setPageOneHidden(true)
        }, 500)
    }
    const handleClickNext2 = () => {
        setCurrentPage(3)
        setTimeout(() => {
            setPageTwoHidden(true)
        }, 500)
    }
    const handleFinalClick = () => {
        navigate('/login')
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [])


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`w-full h-full absolute overflow-hidden ${pageOneHidden && 'hidden'}`}
            >
                <img src={image1} alt="Delicacies" className="h-full w-full absolute -z-20 scale-x-[-1] object-cover" />
                <div className="absolute flex flex-col bg-secondaryBg text-white rounded-[48px] bottom-9 mx-8 p-8 max-w-[311px] min-h-[40%]">
                    <div>
                        <h1 className="text-[32px] leading-10 text-center font-semibold mb-4">We serve incomparable delicacies</h1>
                        <p className="text-sm text-center font-normal mb-4">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
                        <div className='w-full'><Indicator pos={1} /></div>
                    </div>
                    <div className="flex justify-between mt-16 py-1">
                        <button className="font-semibold text-sm" onClick={handleFinalClick}>Skip</button>
                        <button className="" onClick={handleClickNext}>
                            <span className="font-semibold text-sm flex items-center justify-between w-[60px]">
                                <span>Next</span>
                                <svg width="20" height="20" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L12.5858 6H1C0.447716 6 -2.41411e-08 5.55228 0 5C2.41411e-08 4.44772 0.447716 4 1 4H12.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683418 10.2929 0.292893Z" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: "100vw" }}
                animate={currentPage === 2 ? { x: '0vw' } : ''}
                exit={{ x: '0vw' }}
                transition={{ x: { type: "spring", bounce: 0 } }}
                viewport={{ once: true }}
                className={`w-screen h-screen absolute overflow-hidden ${pageTwoHidden && 'hidden'}`}
            >
                <img src={image2} alt="Delicacies" className="h-full w-full absolute -z-20 object-cover" />
                <div className="absolute bg-secondaryBg text-white rounded-[48px] bottom-9 mx-8 p-8 max-w-[311px] min-h-[40%]">
                    <h1 className="text-[32px] leading-10 text-center font-semibold mb-4">We serve incomparable delicacies</h1>
                    <p className="text-sm text-center font-normal mb-4">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
                    <div className='w-full'><Indicator pos={2} /></div>
                    <div className="flex justify-between mt-16 py-1">
                        <button className="font-semibold text-sm" onClick={handleFinalClick}>Skip</button>
                        <button className="" onClick={handleClickNext2}>
                            <span className="font-semibold text-sm flex items-center justify-between w-[60px]">
                                <span>Next</span>
                                <svg width="20" height="20" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L12.5858 6H1C0.447716 6 -2.41411e-08 5.55228 0 5C2.41411e-08 4.44772 0.447716 4 1 4H12.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683418 10.2929 0.292893Z" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: "100vw" }}
                animate={currentPage === 3 ? { x: '0vw' } : ''}
                transition={{ x: { type: "spring", bounce: 0 } }}
                className={`w-screen h-screen absolute overflow-hidden `}
            >
                <img src={image3} alt="Delicacies" className="h-full w-full absolute -z-20 object-cover" />
                <div className="absolute bg-secondaryBg text-white rounded-[48px] bottom-9 mx-8 p-8 max-w-[311px] min-h-[40%]">
                    <h1 className="text-[32px] leading-10 text-center font-semibold mb-4">We serve incomparable delicacies</h1>
                    <p className="text-sm text-center font-normal mb-4">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
                    <div className='w-full mb-6'><Indicator pos={3} /></div>
                    <div className="h-[94px] w-[94px] mx-auto relative flex justify-center items-center ">
                        <div className=' border-2 border-white opacity-10 w-full h-full absolute rounded-full'></div>
                        <span className='absolute'>
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 48C1 73.9574 22.0426 95 48 95C73.9574 95 95 73.9574 95 48C95 22.0426 73.9574 1 48 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                        <button onClick={handleFinalClick} className="h-[62px] w-[62px] bg-white rounded-full flex justify-center items-center z-20">
                            <div className=''>
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-3.05176e-05 7.72566C-3.05176e-05 7.34596 0.282123 7.03217 0.648199 6.98251L0.749969 6.97566L13.934 6.97626L9.17098 2.23273C8.87746 1.94047 8.87644 1.4656 9.1687 1.17207C9.43439 0.905233 9.851 0.88013 10.1451 1.09735L10.2294 1.16979L16.2794 7.19379C16.318 7.23231 16.3517 7.27401 16.3802 7.31804C16.3882 7.33129 16.3964 7.34485 16.4042 7.35868C16.4114 7.37054 16.4178 7.38285 16.4239 7.39529C16.4324 7.4134 16.4407 7.43211 16.4482 7.4512C16.4543 7.46592 16.4594 7.48024 16.464 7.49467C16.4695 7.51256 16.4749 7.53163 16.4795 7.55099C16.483 7.56451 16.4857 7.57751 16.488 7.59057C16.4914 7.61 16.4942 7.63011 16.4962 7.65046C16.498 7.66598 16.499 7.68135 16.4996 7.69674C16.4998 7.70608 16.5 7.71585 16.5 7.72566L16.4996 7.75471C16.499 7.76943 16.498 7.78414 16.4966 7.79881L16.5 7.72566C16.5 7.77299 16.4956 7.81929 16.4872 7.86419C16.4853 7.87491 16.4829 7.88592 16.4804 7.89688C16.475 7.91946 16.4689 7.9412 16.4618 7.96252C16.4583 7.97311 16.4543 7.98442 16.4499 7.99565C16.4412 8.01822 16.4316 8.03973 16.4212 8.06069C16.4163 8.07054 16.4108 8.08086 16.4051 8.09107C16.3958 8.10773 16.3861 8.12356 16.3759 8.13899C16.3687 8.14991 16.3607 8.16127 16.3524 8.17246L16.3459 8.18111C16.3257 8.2075 16.3038 8.23252 16.2803 8.25599L16.2794 8.25669L10.2294 14.2817C9.9359 14.574 9.46103 14.573 9.16874 14.2795C8.90303 14.0127 8.87968 13.596 9.09815 13.3028L9.17094 13.2188L13.932 8.47626L0.749969 8.47566C0.335756 8.47566 -3.05176e-05 8.13987 -3.05176e-05 7.72566Z" fill="#FE8C00" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Onboarding
