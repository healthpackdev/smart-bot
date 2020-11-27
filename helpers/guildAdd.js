async function otoisim(veri,member) {
if(!veri.otoisim)return;
let nick = veri.otoisim.replace("{username}",member.user.username)
await member.setNickname(nick)
}
module.exports.otoisim = otoisim;