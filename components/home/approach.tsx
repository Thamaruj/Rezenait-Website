export default function approach() {
  return (
    <section className="relative bg-[#38D1FB] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 py-20 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="sticky top-32 h-fit">
          <h1 className="text-4xl md:text-7xl font-semibold">Our Approach</h1>
          
          <p className="mt-6 text-gray-400">
            A structured, results-focused methodology designed to align business strategy with intelligent systems ensuring clarity, speed, and lasting value.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-0">
          
          {/* STEP 1 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=1"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 1"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">1. Discovery</h3>
              <p className="mt-4 text-gray-300">
                Understanding your business goals, constraints, and opportunities.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=2"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 2"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">2. Data Strategy</h3>
              <p className="mt-4 text-gray-300">
                Structuring and preparing data for meaningful intelligence.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=3"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 3"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">3. Solution Design</h3>
              <p className="mt-4 text-gray-300">
                Architecting scalable and efficient AI-driven systems.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=4"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 4"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">4. Model Development</h3>
              <p className="mt-4 text-gray-300">
                Training, validating, and optimizing intelligent models.
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=5"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 5"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">5. Deployment</h3>
              <p className="mt-4 text-gray-300">
                Seamless integration into your existing infrastructure.
              </p>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-xl mb-10">
            <img
              src="https://picsum.photos/1200/800?random=6"
              className="absolute inset-0 h-full w-full object-cover"
              alt="Step 6"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-md text-center">
              <h3 className="text-3xl font-semibold">6. Monitoring</h3>
              <p className="mt-4 text-gray-300">
                Continuous performance tracking and intelligent refinement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}