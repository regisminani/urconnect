import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeMainAdmin = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token"); // Retrieve stored token

    if (!token) {
      toast.error("Authentication failed. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://ur-connect.onrender.com/api/admin/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include token in request headers
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send request");
      }

      toast.success("Request sent successfully!");
      setEmail("");
    } catch (error: any) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Section - Background Image and Text */}
        <section className="relative flex h-30 items-end bg-gray-600 lg:col-span-5 lg:h-[90%] lg:mt-16 xl:col-span-6">
          <img
            alt="Background"
            src="/admin.jpeg"
            className="absolute inset-0 h-full w-[100%] object-cover opacity-80"
          />
          <div className="hidden mt-20 lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-[#006991] sm:text-3xl md:text-4xl">
              Welcome to UR-connect
            </h2>
            <p className="mt-4 leading-relaxed text-white">
              Page for the Main Admin
            </p>
          </div>
        </section>

        {/* Right Section - Form */}
        <main className="flex items-center bg-re-70 mt-10 justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div
            className="w-[400px] h-auto bg-white shadow-2xl shadow-[#006991] flex flex-col items-center font-sans p-6"
            style={{ borderRadius: "15px" }}
          >
            {/* Circular Profile Image */}
            <div
              className="relative top-[-45px] h-32 w-32 bg-[#006991] flex items-center justify-center"
              style={{ borderRadius: "50%" }}
            >
              <img src="/th.jpg" alt="Logo" className="w-28 h-28 rounded-full" />
            </div>

            <div className="text-3xl mt-0 mb-3 text-[#006991]"> Request Form </div>

            <form onSubmit={handleSubmit} className="m-3 flex flex-col">
              <label htmlFor="email" className="relative w-[300px]">
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-xl pl-10"
                  value={email}
                  onChange={handleEmailChange}
                />
                <i className="fa-solid fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
              </label>

              <button
                type="submit"
                className={`bg-[#006991] rounded-lg text-xl text-center w-[300px] p-2 mb-5 text-white hover:bg-[#5c90a5] mt-5 ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </main>
      </section>
    </div>
  );
};

export default HomeMainAdmin;
