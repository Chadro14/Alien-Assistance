async function githubCommand(sock, chatId) {
    const repoInfo = `*🪰 Alien-Assistance*

*💻 GitHub Repository:*
https://github.com/Chadro14/Alien-Assistance

*📱 Official Channel Whatsapp:*
https://whatsapp.com/channel/0029Vb6TWEeLY6d7ckvW7X1y

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Alien-Assistance',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
