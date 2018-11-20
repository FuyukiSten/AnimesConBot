module.exports = async (client) => {
    console.log(`O bot está online ${client.user.username}#${client.user.discriminator}`);
    client.user.setActivity("Animes", {type:"WATCHING"});
};
