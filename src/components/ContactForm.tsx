export default function ContactForm() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Information */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-8">Get in touch</h2>
            <div className="w-16 h-1 bg-white mb-8"></div>

            <h3 className="text-xl font-medium mb-12">For general enquiries</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Address :</h4>
                <p className="text-blue-100">110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Phone :</h4>
                <p className="text-blue-100">+91 22 25208822</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Email :</h4>
                <p className="text-blue-100">info@supremegroup.co.in</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="text-white">
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 