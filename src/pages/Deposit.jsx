import DepositInput from "../features/account/DepositInput";
import { motion } from "framer-motion";

function Deposit() {
  return (
    <motion.div
      className="flex w-full flex-col overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <DepositInput />
    </motion.div>
  );
}

export default Deposit;
