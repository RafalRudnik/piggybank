import { motion } from "framer-motion";
import LoanInput from "../features/account/LoanInput";
import LoanPayback from "../features/account/LoanPayback";
import { useSelector } from "react-redux";

function Loan() {
  const account = useSelector((store) => store.account);

  return (
    <motion.div
      className="flex w-full flex-col gap-5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <LoanInput />
      {account.loan !== 0 && <LoanPayback />}
    </motion.div>
  );
}

export default Loan;
