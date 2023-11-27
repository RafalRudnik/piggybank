import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Button from "../ui/Button";

const links = [
  {
    linkTo: "/",
    linkName: "Dashboard",
    class: "ti ti-home-dollar",
  },
  {
    linkTo: "/deposit",
    linkName: "Deposit",
    class: "ti ti-cash",
  },
  {
    linkTo: "/withdraw",
    linkName: "Withdraw",
    class: "ti ti-arrow-iteration",
  },
  {
    linkTo: "/loan",
    linkName: "Loan",
    class: "ti ti-wallet",
  },
  {
    linkTo: "/history",
    linkName: "History",
    class: "ti ti-history-toggle",
  },
];

function Header() {
  const user = useSelector((store) => store.user);

  return (
    <header className="flex flex-wrap items-center justify-around gap-4 py-7">
      <Logo />
      {user.isAuthenticated && <Nav />}
      {user.isAuthenticated && <LogOut />}
    </header>
  );
}

export default Header;

function Nav() {
  return (
    <motion.ul
      className="border-x-1 order-3 flex gap-9 border-x border-stone-300 px-[3rem]"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {links.map((link) => (
        <NavItem item={link} key={link.linkName} />
      ))}
    </motion.ul>
  );
}

function NavItem({ item }) {
  return (
    <NavLink
      to={item.linkTo}
      className="transition:duration-300 focus:ring-indigoring-0 text-center text-stone-500 transition-colors  hover:text-indigo-600 focus:text-indigo-600 focus:outline-none"
    >
      <i className={`text-[1.5rem] ${item.class}`}></i>
      <p className="text-sm">{item.linkName}</p>
    </NavLink>
  );
}

function LogOut() {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="order-2 flex items-center gap-4 lg:order-last"
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="h-[60px] w-[50px] overflow-hidden rounded-full">
        <img src="./img/user.jpeg" className=""></img>
      </div>
      <p className="text-sm">John Doe</p>
      <Button type="small" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </motion.div>
  );
}
