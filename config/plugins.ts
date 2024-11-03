export default ({env}: any) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-azure-storage",
            providerOptions: {
                authType: "default",
                account: env("STORAGE_ACCOUNT"),
                accountKey: env("STORAGE_ACCOUNT_KEY"),
                serviceBaseURL: env("STORAGE_URL"),
                containerName: env("STORAGE_CONTAINER_NAME"),
                defaultPath: "assets",
            },
        },
    },
});
