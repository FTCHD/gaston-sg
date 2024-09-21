import { Box } from '@mui/joy'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useInterval } from 'usehooks-ts'

const messages = [
  'You and I will be friends forever because at this point, you know too much',
  "Roses are red; the world is a mess. And worst of all, you're ignoring my texts.",
  'The doctor told me that I have a healthy heart, but for some reason, it skips a beat whenever I see you.',
  'Do not take life too seriously. You will never get out of it alive.',
  "Two things are infinite: the universe and human stupidity. And I'm not sure about the universe.",
  "I'm not crazy — I've just been in a very bad mood my whole life.",
  "There are 10 kinds of people in the world. Those who understand binary and those who don't.",
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  "Things aren't always #000000 and #FFFFFF",
  "There's no place like 127.0.0.1",
]

const Message = () => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * messages.length)
  )
  const [message, setMessage] = useState(messages[randomIndex])

  const animateFunc = (mess: string) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
        }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {mess}
      </motion.div>
    </AnimatePresence>
  )

  const [animateMessage, setAnimateMessage] = useState(
    animateFunc(messages[randomIndex])
  )

  useInterval(() => {
    setRandomIndex(Math.floor(Math.random() * messages.length))
    setMessage(messages[randomIndex])
    setAnimateMessage(animateFunc(message))
  }, 2000)

  return (
    <Box>
      {animateMessage}
      {/* <AnimatePresence>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
          }}
          exit={{ opacity: 0 }}
        >
          {message}
        </motion.p>
      </AnimatePresence> */}
    </Box>
  )
}

export default Message