import { Client, ID, Account } from "appwrite";
import Config from "../config/Config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(Config.appwriteurl)
      .setProject(Config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async register(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // logic for successful registration
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("register", error);
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("login", error);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("getUser", error);
      }
      return null;
    }
    
    async logout() {
      try {
        return await this.account.deleteSessions();
      } catch (error) {
        console.log("logout", error);
      }
    }
}

const authService = new AuthService();
export default authService;
