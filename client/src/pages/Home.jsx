import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store'
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import { CustomButton } from '../components'


const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain' />
                </motion.header>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div className="home-text" {...headTextAnimation}>
                        <h1 className="head-text"> 
                          LETS <br className='xl:block hidden'/> DO IT. 
                        </h1>
                    </motion.div>
                    <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                        <p className='max-w-md font-normal text-gray-600 text-base'> 
                            Create yur unique and exclusive shirt with our new 3D model customizer.
                            <strong> Unleash you creativiity</strong>{" "}
                            and define your own style.
                        </p>

                        <CustomButton
                            type='filled'
                            title='Customize Now'
                            handleClick={() => state.intro = false}
                            customStyle='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}
  

export default Home