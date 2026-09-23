import { Account, Client, Databases, Storage } from "appwrite";

import { appwritePublicConfig } from "@/lib/appwrite/config";

let cachedClient: Client | null = null;

export function getAppwriteClient() {
  if (!cachedClient) {
    cachedClient = new Client()
      .setEndpoint(appwritePublicConfig.endpoint)
      .setProject(appwritePublicConfig.projectId);
  }

  return cachedClient;
}

export function getAppwriteAccount() {
  return new Account(getAppwriteClient());
}

export function getAppwriteDatabases() {
  return new Databases(getAppwriteClient());
}

export function getAppwriteStorage() {
  return new Storage(getAppwriteClient());
}
