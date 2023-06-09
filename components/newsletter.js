export default function newsletter() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/96/61/94/360_F_296619471_iEGweTy9VsokHtbCJsVmyez0d2rocmmA.jpg')",
            height: "300px",
          }}
        ></div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div
            className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex flex-wrap justify-center text-center lg:text-left">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div className="mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold">
                      Do not miss any updates.
                      <br />
                      <span className="text-blue-600">
                        Subscribe to the newsletter
                      </span>
                    </h2>
                  </div>

                  <div className="mb-6 md:mb-0">
                    <div className="md:flex flex-row">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
