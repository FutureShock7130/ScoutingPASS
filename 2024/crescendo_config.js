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
    { "name": "比賽名稱",
      "code": "e",
      "type": "event",
      "defaultValue": "2024casf",
      "required": "true"
    },
    { "name": "比賽類型",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "資格賽<br>",
        "sf": "準決賽<br>",
        "f": "決賽"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "比賽編號 #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "隊伍位置(依照賽程表)",
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
    { "name": "隊伍號碼",
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
    { "name": "撿Note方法",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "音源區<br>",
        "f": "地面<br>",
        "b": "兩者<br>",
        "x": "沒撿"
      },
      "defaultValue": "f"
    }
  ],
  "endgame": [
    { "name": "Stage計時",
      "code": "dt",
      "type": "timer"
    },
    { "name": "最終狀態",
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
    { "name": "Trap裡有Note",
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
        "x": "沒動"
      },
      "defaultValue": "a"
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
