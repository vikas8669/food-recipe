import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

export default function Success() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <RingLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Order Successful!
            </h2>
            <p>Your Order has been successful placed</p>
          </div>
        )}
      </div>
    </>
  );
}
