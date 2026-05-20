const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Contact Us
        </span>

        <h1 className="text-6xl font-extrabold text-[#0f172a] mt-8">
          We'd Love To Hear From You
        </h1>

        <p className="text-2xl text-gray-600 mt-8 leading-relaxed">
          For partnerships, questions, feedback,
          or support inquiries, contact us anytime.
        </p>

        <div className="mt-16 bg-gray-50 rounded-3xl p-12 border border-gray-200">

          <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
            Email Support
          </h2>

          <p className="text-2xl text-green-600 font-semibold">
            support@beefly.online
          </p>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;