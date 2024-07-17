import { image1, successImg } from '../../assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

const logout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

const LoginSuccess = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/tracking')
    }

    const handleLogout = async () => {
        await logout();
        navigate('/login'); 
      };

    return (
        <div className={`w-full h-full relative`}>
            <img src={image1} alt="Delicacies" className="h-full w-full -z-20 scale-x-[-1] object-cover" />
            <motion.div
                drag='y'
                dragConstraints={{ bottom: -150, top: 0 }}
                dragElastic={0.2}
                initial={{ y: "55vh" }}
                animate={{ y: "0vh" }}
                transition={{ y: { type: "spring", bounce: 0 }, ease:"easeInOut" }}
                className='bg-white flex flex-col items-center absolute bottom-0 w-full min-h-[40%] pb-6 px-6 rounded-t-3xl'>
                <div className='text-center w-full h-6 flex justify-center py-3 mb-3'>
                    <div className=' h-[4px] w-[58px] opacity-20 bg-black rounded-[11px]'></div>
                </div>
                <div className='flex flex-col items-center'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, ease:'easeIn' }}
                        className='my-3'>
                        <img className='h-[168px]' src={successImg} alt="login success" />
                    </motion.div>
                    <div className=' my-3 text-2xl w-full font-semibold text-center'>Login Successful</div>
                    <button
                        onClick={handleClick}
                        className='py-3 my-3 w-[312px] bg-[#FE8C00] text-sm text-white rounded-full'>Go to Tracking Screen</button>
                    <div onClick={handleLogout} className=' my-3 text-sm text-center font-medium text-[#878787] cursor-pointer'>Logout</div>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginSuccess