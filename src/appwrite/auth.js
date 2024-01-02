import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  // pehle client bnayenge
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint("conf.appwriteUrl")
      .setProject("conf.appwriteProjectId");
    this.account = new Account(this.client);
  }
  // Create account signUp
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //   login or signIn
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //   Current User
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: get currentUser:: error", error);
    }
    return null;
  }

  // Logout
  async logout() {
    await this.account.deleteSessions();
    try {
    } catch (error) {
      console.log("Appwrite service :: get currentUser:: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
