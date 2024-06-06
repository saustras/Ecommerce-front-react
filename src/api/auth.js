import { toast } from "react-toastify";

const { ENV } = require("@/utils/constants");

export class Auth {
    async register(data) {
        try {
          data.role= 1
          const nameSplit = this.splitName(data.name)
          data.name = nameSplit.name;
          data.lastname = nameSplit.lastname;
          console.log(data)
          const url =`${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`
          const params = {
              method:"POST",
              headers: {
                  "Content-Type":"application/json",
              },
              body: JSON.stringify(data)
          };

          const response = await fetch(url, params);

          if (!response.ok) {
            const errorData = await response.json();
            toast.error(errorData.message)
            throw new Error(errorData.message);
          }
          return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async login(data) {
        try {
          const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
          const params = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
    
          const response = await fetch(url, params);
          console.log(response)
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message);
            }
            return await response.json();
        } catch (error) {
          throw error;
        }
      }

      splitName(fullName) {
        const parts = fullName.trim().split(" ");
      
        let name = "";
        let lastname = "";
      
        switch (parts.length) {
          case 1:
            name = parts[0];
            break;
          case 2:
            [name, lastname] = parts;
            break;
          case 3:
            name = parts[0];
            lastname = parts.slice(1).join(" ");
            break;
          default:
            name = parts.slice(0, 2).join(" ");
            lastname = parts.slice(2).join(" ");
        }
      
        return { name, lastname };
      }
      
}