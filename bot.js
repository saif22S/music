const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W";
var adminprefix = 'W'







  client.on('message', msg => {//msg
    if (msg.content === `${prefix}colors`) {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/501774006966419458/501774646467887105/colors.png"})
    }
  });;
 
  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `${prefix}color`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });
 
   
client.on('message', message => {
  if(message.content === prefix + 'createcolors') {
                       if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
    message.guild.createRole({
                name: "1",
                  color: "#FFB6C1",
                  permissions: []
   })
         message.guild.createRole({
                name: "2",
                  color: "#FFC0CB",
                  permissions: []
   })
              message.guild.createRole({
                name: "3",
                  color: "#FF69B4",
                  permissions: []
   })
                   message.guild.createRole({
                name: "4",
                  color: "#FF1493",
                  permissions: []
   })
                   message.guild.createRole({
                name: "5",
                  color: "#DB7093",
                  permissions: []
   })
                   message.guild.createRole({
                name: "6",
                  color: "#C71585",
                  permissions: []
   })
                   message.guild.createRole({
                name: "7",
                  color: "#E6E6FA",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#D8BFD8",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#DDA0DD",
                  permissions: []
   })
                   message.guild.createRole({
                name: "9",
                  color: "#DA70D6",
                  permissions: []
   })
                   message.guild.createRole({
                name: "10",
                  color: "#EE82EE",
                  permissions: []
   })
                   message.guild.createRole({
                name: "11",
                  color: "#FF00FF",
                  permissions: []
   })
                   message.guild.createRole({
                name: "12",
                  color: "#BA55D3",
                  permissions: []
   })
                   message.guild.createRole({
                name: "13",
                  color: "#9932CC",
                  permissions: []
   })
                        message.guild.createRole({
                name: "14",
                  color: "#9400D3",
                  permissions: []
   })
                        message.guild.createRole({
                name: "15",
                  color: "#8A2BE2",
                  permissions: []
   })
                             message.guild.createRole({
                name: "16",
                  color: "#8B008B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "17",
                  color: "#800080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "18",
                  color: "#9370DB",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "19",
                  color: "#7B68EE",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "20",
                  color: "#6A5ACD",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "21",
                  color: "#483D8B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "22",
                  color: "#663399",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "23",
                  color: "#4B0082",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "24",
                  color: "#FFA07A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "25",
                  color: "#FA8072",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "26",
                  color: "#E9967A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "27",
                  color: "#F08080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "28",
                  color: "#CD5C5C",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "29",
                  color: "#DC143C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "30",
                  color: "  #FF0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "31",
                  color: "#B22222",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "32",
                  color: "#8B0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "33",
                  color: "#FFA500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "34",
                  color: "#FF8C00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "35",
                  color: "#FF7F50",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "36",
                  color: "#FF6347",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "37",
                  color: "#FF4500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "38",
                  color: "#FFD700",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "39",
                  color: "#FFFFE0",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "40",
                  color: "#FFFACD",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "41",
                  color: "#FAFAD2",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "42",
                  color: "  #FFEFD5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "43",
                  color: "#FFE4B5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "44",
                  color: "#FFDAB9",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "45",
                  color: "#EEE8AA",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "46",
                  color: "#F0E68C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "47",
                  color: "#BDB76B",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "48",
                  color: "#ADFF2F",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "49",
                  color: "#7FFF00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "50",
                  color: "#7CFC00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "51",
                  color: "#00FF00",
                  permissions: []
   })  
   
                                       message.guild.createRole({
                name: "52",
                  color: "#32CD32",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "53",
                  color: "#98FB98",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "54",
                  color: "#90EE90",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "55",
                  color: "#00FA9A",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "56",
                  color: "#00FF7F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "57",
                  color: "#3CB371",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "58",
                  color: "#2E8B57",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "59",
                  color: "#2E8B57",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "60",
                  color: "#008000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "61",
                  color: "#006400",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "62",
                  color: "#9ACD32",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "63",
                  color: "#6B8E23",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "64",
                  color: "#556B2F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "65",
                  color: "#66CDAA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "66",
                  color: "#8FBC8F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "67",
                  color: "#20B2AA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "68",
                  color: "#008B8B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "69",
                  color: "#008080",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "70",
                  color: "#00FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "71",
                  color: "#E0FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "72",
                  color: "#AFEEEE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "73",
                  color: "#7FFFD4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "74",
                  color: "#40E0D0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "75",
                  color: "#48D1CC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "76",
                  color: "#00CED1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "77",
                  color: "#5F9EA0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "78",
                  color: "#4682B4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "79",
                  color: "#B0C4DE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "80",
                  color: "#ADD8E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "81",
                  color: "#B0E0E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "82",
                  color: "#87CEFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "83",
                  color: "#87CEEB",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "84",
                  color: "#6495ED",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "85",
                  color: "#00BFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "86",
                  color: "#1E90FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "87",
                  color: "#4169E1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "88",
                  color: "#0000FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "89",
                  color: "#0000CD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "90",
                  color: "#00008B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "91",
                  color: "#000080",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "92",
                  color: "#191970",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "93",
                  color: "#FFF8DC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "94",
                  color: "#FFEBCD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "95",
                  color: "#FFE4C4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "96",
                  color: "#FFDEAD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "97",
                  color: "#F5DEB3",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "98",
                  color: "#DEB887",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "99",
                  color: "#D2B48C",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "100",
                  color: "#BC8F8F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "101",
                  color: "#F4A460",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "102",
                  color: "#DAA520",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "103",
                  color: "#B8860B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "104",
                  color: "#CD853F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "105",
                  color: "#D2691E",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "106",
                  color: "#808000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "107",
                  color: "#8B4513",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "108",
                  color: "#A0522D",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "109",
                  color: "#A52A2A",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "110",
                  color: "#800000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "111",
                  color: "#FFFFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "112",
                  color: "#FFFAFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "113",
                  color: "#F0FFF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "114",
                  color: "#F5FFFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "115",
                  color: "#F0FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "116",
                  color: "#F0F8FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "117",
                  color: "#F8F8FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "118",
                  color: "#F5F5F5",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "119",
                  color: "#FFF5EE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "120",
                  color: "#F5F5DC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "121",
                  color: "#FDF5E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "122",
                  color: "#FFFAF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "123",
                  color: "#FFFFF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "124",
                  color: "#FAEBD7",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "125",
                  color: "#FAF0E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "126",
                  color: "#FFF0F5",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "127",
                  color: "#FFE4E1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "128",
                  color: "#DCDCDC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "129",
                  color: "#D3D3D3",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "130",
                  color: "#C0C0C0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "131",
                  color: "#f7f7f7",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "132",
                  color: "#b2b2b2",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "133",
                  color: "#6f6c6c",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "134",
                  color: "#4d4646",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "135",
                  color: "#4c4c4c",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "136",
                  color: "#2F4F4F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "137",
                  color: "#040000",
                  permissions: []
   })    
 
   
        message.channel.sendMessage({embed: new Discord.RichEmbed()
   .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
  }
 
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '1');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '2');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '3');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '4');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '5');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '6');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '7');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '8');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '9');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '10');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '11');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '12');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '13');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '14');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '15');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '16');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '17');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '18');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '19');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '20');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("+!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '21');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '22');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '23');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '24');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '25');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '26');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '27');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '28');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '29');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '30');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '31');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '32');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '33');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '34');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '35');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '36');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '37');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '38');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '39');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '40');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '41');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '42');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '43');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '44');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '45');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '46');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '47');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '48');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '49');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '50');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '51');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '52');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '53');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '54');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '55');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '56');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '57');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '58');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '59');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '60');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '-61');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '62');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '63');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '64');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '65');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '66');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '67');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '68');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '69');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '70');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '71');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '72');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '73');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '74');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '75');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '76');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '77');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '78');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '79');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '80');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '81');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '82');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '83');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '84');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '85');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '86');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '87');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '88');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '89');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '90');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '91');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '92');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '93');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '94');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '95');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '96');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith (`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '97');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '98');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '99');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '100');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '101');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '102');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '103');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '104');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '105');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith (`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '106');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '107');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '108');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '109');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '110');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '111');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '112');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '113');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '114');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '115');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '116');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '117');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '118');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '119');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '121');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '122');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '123');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '124');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '125');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '126');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '127');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '128');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '129');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '130');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '131');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '132');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '133');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '134');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '135');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '136');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '137');
 
  role.delete()
  }
 
});
})
