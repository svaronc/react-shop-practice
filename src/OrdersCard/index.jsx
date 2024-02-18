import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoCalendarSharp } from "react-icons/io5";
import PropTypes from "prop-types";

export const OrdersCard = ({ totalPrice, totalProducts }) => {
  const date = new Date();
  return (
    <div className="flex justify-between items-center m-3 border rounded-lg border-black p-4 w-80 shadow-md">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="flex items-center mt-2 gap-1">
          <IoCalendarSharp/>
          <p>
          <span>{date.toLocaleDateString()}</span>
          </p>
          </div>
          <div className="flex items-center mt-2 gap-1">
          <HiMiniShoppingBag/>
          <p>
          <span>{totalProducts} articles</span>
          </p>
          </div>
          
        </div>
        <p className="flex items-center gap-2">
          <span className="font-medium text-xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};


