{
        "route": {                                                      "geoip": {
                "path": "geo-assets\\sagernet-sing-geoip-geoip.db"
                },                                                      "geosite": {
                "path": "geo-assets\\sagernet-sing-geosite-geosite.db"
                },                                                      "rules": [
                {                                                               "inbound": "dns-in",
                        "outbound": "dns-out"                           },
                {                                                               "port": 53,
                        "outbound": "dns-out"                           },
                {                                                               "clash_mode": "Direct",
                        "outbound": "direct"                            },
                {                                                               "clash_mode": "Global",
                        "outbound": "select"                            }
                ],                                                      "auto_detect_interface": true,
                "override_android_vpn": true                    },
        "outbounds": [                                                  {
                "type": "selector",                                     "tag": "select",
                "outbounds": [                                                  "auto",
                        "IP->Iran, Yotube:Geekmeek",                            "IP->Main, Yotube:Geekmeek"
                ],                                                      "default": "auto"
                },                                                      {
                "type": "urltest",                                      "tag": "auto",
                "outbounds": [                                                  "IP->Iran, Yotube:Geekmeek",
                        "IP->Main, Yotube:Geekmeek"                     ],
                "url": "http://cp.cloudflare.com/",                     "interval": "10m0s"
                },                                                      {
                "type": "wireguard",
                "tag": "IP->Iran, Yotube:Geekmeek",
                "local_address": [
                        "172.16.0.2/32",
                        "2606:4700:110:8cbc:3f4b:d82d:e602:24f9/128"
                ],
                "private_key": "wNQR4zMK/FOl6YAaORkloSrDAT1MRtl1xv5uGziJ/WU=",
                "server": "2606:4700:d1::2d1b:536e:4194:f6f1",
                "server_port": 4198,
                "peer_public_key": "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=",
                "reserved": [111,178,252],
                "mtu": 1280,
                "fake_packets": "5-10"
                },
                {
                "type": "wireguard",
                "tag": "IP->Main, Yotube:Geekmeek",
                "detour": "IP->Iran, Yotube:Geekmeek",
                "local_address": [
                        "172.16.0.2/32",
                        "2606:4700:110:8c51:5ecd:8fbc:fa6a:955a/128"
                ],
                "private_key": "OBkotGOMQAzcX3Nb9P/RqS09FmZV0bMjfW5ICgZlIF0=",
                "server": "2606:4700:d0::6e45:979f:e03f:1acb",
                "server_port": 4198,
                "peer_public_key": "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=",
                "reserved": [20,234,8],
                "mtu": 1280,
                "fake_packets": "5-10"
                },
                {
                "type": "dns",
                "tag": "dns-out"
                },
                {
                "type": "direct",
                "tag": "direct"
                },
                {
                "type": "direct",
                "tag": "bypass"
                },
                {
                "type": "block",
                "tag": "block"
                }
        ]
        }
~ $
