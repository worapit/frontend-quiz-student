// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Donation } from "@/utils/types";

// function useUsers(right: boolean) {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   async function fetchUsers() {
//       const res = await axios.get(
//         "https://donation-server-production.up.railway.app/donation"
//       );
//       const result = Donation.safeParse(res.data);

//       if (!result.success) {
//         console.error("Validation error:", result.error.issues);
//         setError(JSON.stringify(result.error.issues));
//         return;
    
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return { users, error };
// }

// export default useUsers;
