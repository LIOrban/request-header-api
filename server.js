var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send({
        "ip": req.headers["x-forwarded-for"],
        "language": getLang(req.headers["accept-language"]),
        "operating system": getOS(req.headers["user-agent"])
    });
});

function getLang(str) {
    return str.split(";")[0]
}

function getOS(str) {
    var osObject={
        'Win16' : 'Windows 3.11',
        'Windows 95' : 'Windows 95',
        'Win95' : 'Windows 95',
        'Windows_95' : 'Windows 95',
        'Windows 98' : 'Windows 98',
        'Win98' : 'Windows 98',
        'Windows NT 5.0' :'Windows 2000',
        'Windows 2000' : 'Windows 2000',
        'Windows NT 5.1' : 'Windows XP',
        'Windows XP' : 'Windows XP',
        'Windows NT 5.2' : 'Windows Server 2003',
        'Windows NT 6.0' : 'Windows Vista',
        'Windows NT 6.1' : 'Windows 7',
        'Windows NT 6.2' : 'Windows 8',
        'Windows NT 4.0': 'Windows NT 4.0',
        'WinNT4.0' : 'Windows NT 4.0',
        'WinNT' : 'Windows NT 4.0',
        'Windows NT' : 'Windows NT 4.0',
        'Windows ME' : 'Windows ME',
        'Open BSD' : 'OpenBSD',
        'Sun OS' : 'SunOS',
        'Linux' : 'Linux',
        'X11' : 'Linux',
        'Mac_PowerPC' : 'Mac OS',
        'Macintosh' : 'Mac OS',
        'QNX' : 'QNX',
        'BeOS' : 'BeOS',
        'OS/2' : 'OS/2',
        'nuhk' : 'Search Bot',
        'Googlebot' : 'Search Bot',
        'Yammybot' : 'Search Bot',
        'Openbot' : 'Search Bot',
        'Slurp' : 'Search Bot',
        'MSNBot' : 'Search Bot',
        'Ask Jeeves/Teoma' : 'Search Bot',
        'ia_archiver' : 'Search Bot'
    };
    
    for (var key in osObject) {
        if (str.includes(key)) {return osObject[key]}
    }
}

app.listen(process.env.PORT || 8080);
