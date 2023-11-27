import DashOverview from "../components/DashOverview";
import { motion } from "framer-motion";
import Chart from "../components/Chart";

function Home() {
  return (
    <motion.div
      className="w-full flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <DashOverview />
      <Chart />
    </motion.div>
  );
}

export default Home;
