import { motion } from "framer-motion";
import "../styles/animated-bg.css";

export default function ComingSoon() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen bg-linear-to-b from-gray-900 to-gray-800 text-white m-0 p-0 fixed top-0 left-0 animated-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-indigo-500/30 rounded-full flex items-center justify-center animate-pulse border-2">
            <img
              src="/src/assets/construction-svgrepo-com.svg"
              alt="construction icon"
              className="w-18 h-18"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Strona w budowie</h1>
      </motion.div>
    </main>
  );
}
