import React from "react";
import {
  Mail,
  MessageSquare,
  User,
  MapPin,
  AlertCircle,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO */}
      <section className="bg-[#f3f5f7] border-b border-gray-200 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold text-[#0f172a] mb-8">
            Contact Us
          </h1>

          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Have a question or feedback? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-5xl font-extrabold text-[#0f172a] mb-10">
              Get in Touch
            </h2>

            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              We value your feedback. Whether you found a mistake in one of our
              reviews, want to suggest a new provider, or just want to say hello,
              please fill out the form.
            </p>

            <p className="text-2xl text-gray-600 leading-relaxed mb-14">
              For fast inquiries, you can also email us directly at
              <br />

              <a
                href="mailto:support@axiomor.online"
                className="text-green-600 font-semibold hover:text-green-700 transition"
              >
                support@axiomor.online
              </a>
            </p>

            {/* INFO ITEMS */}

            <div className="space-y-10 mb-14">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-7 h-7 text-green-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-2">
                    Editorial Feedback
                  </h3>

                  <p className="text-xl text-gray-500">
                    Spot an error or have a suggestion for our content team?
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-green-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-2">
                    Partnerships
                  </h3>

                  <p className="text-xl text-gray-500">
                    Interested in advertising or working with us?
                  </p>
                </div>

              </div>

            </div>

            {/* CONTACT PERSON CARD */}

            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 mb-12">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <User className="w-7 h-7 text-green-600" />
                </div>

                <h3 className="text-3xl font-bold text-[#0f172a]">
                  Contact Person
                </h3>

              </div>

              <h4 className="text-3xl font-semibold text-[#0f172a] mb-8">
                Muhammed Fazal Koranath Nazar
              </h4>

              <div className="flex items-start gap-4">

                <MapPin className="w-7 h-7 text-green-600 mt-1 shrink-0" />

                <p className="text-xl text-gray-600 leading-relaxed">
                  Flat 804 Al Noor Tower Al Mankhool Street Bur Dubai
                  <br />
                  Bur Dubai Mankhool - Dubai - United Arab Emirates
                  <br />
                  Dubai, AE
                </p>

              </div>

            </div>

            {/* IMPORTANT NOTE */}

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-3xl p-10">

              <div className="flex items-start gap-5">

                <AlertCircle className="w-8 h-8 text-yellow-600 shrink-0 mt-1" />

                <div>

                  <h3 className="text-3xl font-bold text-[#8a5600] mb-6">
                    Important Note on Support
                  </h3>

                  <p className="text-xl text-[#9a6700] leading-relaxed mb-8">
                    We are an informational review site.
                    <span className="font-bold">
                      {" "}We do not provide technical support{" "}
                    </span>
                    for any of the hosting providers or registrars mentioned on
                    this site.
                  </p>

                  <p className="text-xl text-[#9a6700] leading-relaxed">
                    If you have a billing issue or technical problem with your
                    service, please contact the provider
                    (e.g. Bluehost, Namecheap) directly through their website.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-10 sticky top-28">

            <form
              action="https://formsubmit.co/support@axiomor.online"
              method="POST"
              className="space-y-8"
            >

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_next"
                value="https://axiomor.online/contact"
              />

              {/* NAME */}

              <div>

                <label className="block text-xl font-semibold text-[#0f172a] mb-4">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full h-20 rounded-2xl border border-gray-300 px-6 text-xl outline-none focus:border-green-500"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block text-xl font-semibold text-[#0f172a] mb-4">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full h-20 rounded-2xl border border-gray-300 px-6 text-xl outline-none focus:border-green-500"
                />

              </div>

              {/* SUBJECT */}

              <div>

                <label className="block text-xl font-semibold text-[#0f172a] mb-4">
                  Subject
                </label>

                <select
                  name="subject"
                  className="w-full h-20 rounded-2xl border border-gray-300 px-6 text-xl outline-none focus:border-green-500 bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Editorial Feedback</option>
                  <option>Partnership Opportunity</option>
                  <option>Report an Error</option>
                </select>

              </div>

              {/* MESSAGE */}

              <div>

                <label className="block text-xl font-semibold text-[#0f172a] mb-4">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows="7"
                  required
                  className="w-full rounded-2xl border border-gray-300 p-6 text-xl outline-none focus:border-green-500 resize-none"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full h-20 rounded-2xl bg-green-600 hover:bg-green-700 transition text-white text-3xl font-bold shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ContactPage;