import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/app/api/auth/loginUser";
import dbConnect, { collectionName } from "./dbConnect";
export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);

        if (user) {
          console.log("user is", user);
          return user;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        const { providerAccountId, provider } = account;
        const { email, name, image } = user;
        const userCollection = dbConnect(collectionName.USERS);
        const isExist = await userCollection.findOne({ providerAccountId });
        if (!isExist) {
          const res = await userCollection.insertOne({
            email,
            providerAccountId,
            image,
            name,
          });
          console.log("res is", res);
          return user;
        }

        return user;
      }
      return null;
    },
  },
};
