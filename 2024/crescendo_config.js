var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "紀錄者姓名",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024casf",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "在圖上點機器人起始位置",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "離開起始線(藍線)",
      "code": "al",
      "type": "bool"
    },
    { "name": "Auto進Amp數量",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Auto進Speaker數量",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Tele進Amp數量",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Tele進Speaker數量",
      "code": "tss",
      "type": "counter"
    },
    { "name": "整對聯盟Amplified的次數",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "No"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "停在Stage下(Bumper有碰到就好)<br>",
        "o": "懸掛<br>",
        "s": "懸掛(有套中)<br>",
        "h": "多台一起懸掛<br>",
        "a": "試著懸掛但掉下來<br>",
        "x": "試都沒試"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "駕駛綜合評價",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "低<br>",
        "a": "中<br>",
        "v": "高<br>",
        "x": "-1"
      },
      "defaultValue": "x"
    },
    { "name": "防守能力",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "低<br>",
        "a": "中<br>",
        "g": "高<br>",
        "e": "極佳<br>",
        "x": "未進行防守"
      },
      "defaultValue": "x"
    },
    { "name": "循環速度評價",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (慢)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (快)"
      },
      "defaultValue":"3"
    },
    { "name": "整場不動/被Disable",
      "code": "die",
      "type": "bool"
    },
    { "name": "重心高容易倒<br>",
      "code": "tip",
      "type": "bool"
    },
    { "name": "掉Note (>2)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "好隊友?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "額外評論",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
