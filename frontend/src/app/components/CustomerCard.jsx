// src/app/components/CustomerCard.jsx

const CustomerCard = ({ quote, logo }) => {
    return (
      <div className="border border-gray-300 rounded-lg p-6 mt-6 shadow-md text-center">
        <p className="text-lg font-semibold italic mb-4">
          {quote}
        </p>
        <img src={logo} alt="Customer Logo" className="mx-auto h-12" />
      </div>
    );
  };
  
  export default CustomerCard;
  