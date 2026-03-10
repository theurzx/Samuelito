// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1473075923552309419",
        serverId: "1360779907994746941",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
