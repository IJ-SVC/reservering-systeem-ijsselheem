const DEFAULT_APPWRITE_ENDPOINT = "https://level0.ijsselheem.dev/v1";

export const appwritePublicConfig = {
  endpoint:
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? DEFAULT_APPWRITE_ENDPOINT,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "",
  projectName: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_NAME ?? "",
};

export const isAppwriteConfigured = Boolean(
  appwritePublicConfig.projectId
);
