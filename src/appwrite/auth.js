import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// appwrite useable code!
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, passowrd, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        passowrd,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, passowrd });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  //   login
  async login({ email, passowrd }) {
    try {
      return await this.account.createEmailPasswordSession(email, passowrd);
    } catch (error) {
      throw error;
    }
  }

  //   GetCurrentUser
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
      console.log("Appwrite services :: getCurrentUser :: error", error);
    }
    return null;
  }

  //   logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite services :: logut :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
