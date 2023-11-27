import { motion } from "framer-motion";
import AccountHistory from "../features/account/AccountHistory";

function History() {
  return (
    <motion.div
      className="flex w-full flex-col overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AccountHistory />
    </motion.div>
  );
}

export default History;
