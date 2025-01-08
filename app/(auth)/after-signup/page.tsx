"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AfterSignUpPage = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user?.emailAddresses) {
      // Make the API call to store the user data
      const saveUserData = async () => {
        try {
          const response = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userEmail: user.emailAddresses,
              userFirstName: user.firstName,
              userLastName: user.lastName,
              userProfilePicture: user.imageUrl,
            }),
          });
          const result = await response.json();
          console.log("User data saved:", result);

          // Redirect to the dashboard after successful data storage
          router.push("/dashboard/");
        } catch (error) {
          console.error("Error storing user data:", error);
        }
      };

      saveUserData();
    }
  }, [user?.emailAddresses, router]);

  return <div>Saving your data...</div>;
};

export default AfterSignUpPage;
