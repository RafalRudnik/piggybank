import WithdrawInput from "../features/account/WithdrawInput";
import { motion } from "framer-motion";

function Withdraw() {
  return (
    <motion.div
      className="flex w-full flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <WithdrawInput />
    </motion.div>
  );
}

export default Withdraw;
