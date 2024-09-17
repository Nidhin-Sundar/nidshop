const ContactInfo = () => {
  const offices = [
    {
      location: "Office",
      address1: "203 North Michigan Avenue, Suite 1100",
      address2: "Chicago, IL 60601 USA",
      phone: "(123) 456-7890",
      email: "office@support.com",
    },
    {
      location: "Studio",
      address1: "203 North Michigan Avenue, Suite 1100",
      address2: "Chicago, IL 60601 USA",
      phone: "(123) 456-7890",
      email: "studio@support.com",
    },
    {
      location: "Shop",
      address1: "203 North Michigan Avenue, Suite 1100",
      address2: "Chicago, IL 60601 USA",
      phone: "(123) 456-7890",
      email: "shop@support.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      {offices.map((office, index) => (
        <div key={index} className="p-6 bg-white  rounded-lg text-center">
          <h4 className="text-xl font-bold text-green-500">
            {office.location}
          </h4>
          <p className="text-gray-500 mt-2">{office.address1}</p>
          <p className="text-gray-500 mt-2">{office.address2}</p>
          <p className="text-gray-500 mt-2">Phone: {office.phone}</p>
          <p className="text-gray-500 mt-2">Email: {office.email}</p>
          <button className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md">
            View Map
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
