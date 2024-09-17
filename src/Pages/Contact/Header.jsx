const HeaderSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Left Column: Header and Description */}
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-lg font-semibold text-green-500 mb-2">
          How can help you ?
        </h3>
        <h2 className="text-3xl font-bold text-gray-500 mb-4">
          Let us know how we can help you
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui
          magnam amet magni doloribus? Minus nisi aspernatur repellat ex
          temporibus!
        </p>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui
          magnam amet magni doloribus? Minus nisi aspernatur repellat ex
          temporibus!
        </p>
      </div>

      {/* Right Columns: Information Blocks */}
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-500">
            01. Visit Feedback
          </h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsa
            ab eum architecto doloremque voluptates.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500">
            02. Employer Services
          </h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsa
            ab eum architecto doloremque voluptates.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500">
            03. Billing Inquiries
          </h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500">
            04. General Inquiries
          </h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
